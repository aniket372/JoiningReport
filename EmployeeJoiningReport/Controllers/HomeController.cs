using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Adv.Emp.Model;
using Adv.Emp.Service;
using Adv.Emp.Model.Models;
using System.IO;
using Adv.Emp.DAL;

namespace EmployeeJoiningReport.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddEmployee()
        {
            return View();
        }
        public ActionResult PersonalDetails()
        {
            return View();
        }
        public ActionResult EmergencyContacts()
        {
            return View();
        }
        public ActionResult InsuranceDetails()
        {
            return View();
        }
        public ActionResult DocumentDetails()
        {
            return View();
        }
        public ActionResult DeviceDetails()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Upload()
        {
           

            return View();
        }
        public ActionResult AdminLogin()
        {
            
            return View();
        }
        [HttpPost]
        public ActionResult AdminLogin(LoginModel login)
        {
            Employee employee = new Employee();
            LoginService loginService = new LoginService();
            Int64 output = loginService.GetLogin(login);
            if (output == 1)
            {
                return RedirectToAction("GetAllEmployees");
            }

            // EmployeeService empService = new EmployeeService();
            //Employee employee = new Employee();
            //empService.GetAllEmployee();
            else
            {
                ViewBag.Message = "Invalid Login";
                return View();
            }


            // return GetAllEmployees();
            // return View(empService.GetAllEmployee());
        }
        [HttpPost]
        public ActionResult PersonalDetails(Employee employee)
        {
            EmployeeService empService = new EmployeeService();
            //Employee employee = new Employee();
            Int64 sample = empService.AddEmployee(employee);
            Session["empId"] = sample;
            return Json(employee);
        }
        
        public ActionResult GetAllEmployees(String Message)
        {
            ViewBag.message = Message;
            EmployeeService empService = new EmployeeService();
            //Employee employee = new Employee();
            empService.GetAllEmployee();
           
            return View(empService.GetAllEmployee());
        }
       
        [HttpPost]
        public ActionResult EmergencyContacts(EmergencyContact emergency)
        {
            try
            {
                EmergencyContactsService emergencyService = new EmergencyContactsService();
                emergency.EmployeeNumber = (Int64)Session["empId"];
                //Employee employee = new Employee();

                emergencyService.SaveEmergencyContacts(emergency);
                return Json(emergency.EmployeeNumber);
            }
            catch(Exception ex)
            {
                return Json("Error Occured");
            }
        }
        [HttpPost]
        public ActionResult InsuranceDetails(List<InsuranceDetails> insurance)
        {
            // insurance.Add(new InsuranceDetails { EmployeeId = (Int64)Session["empId"] });


            InsuranceDetailsService insuranceService = new InsuranceDetailsService();
            //Employee employee = new Employee();

            insuranceService.SaveInsuranceDetails(insurance);
            return Json(insurance);
        }
        [HttpPost]
        public ActionResult BankDetails(BankDetails bank)
        {
            try
            {
                BankDetailsService bankservice = new BankDetailsService();

                bankservice.SaveBankDetails(bank);
                return Json(bank);
            }
            catch (Exception ex)
            {
                return Json("Error Occured");
            }
        }
        [HttpPost]
        public ActionResult DocumentDetails(List<DocumentDetails> document)
        {
            DocumentDetailsService documentService = new DocumentDetailsService();

            documentService.SaveDocumentDetails(document);
            return Json(document);
        }
        [HttpPost]
        public ActionResult DeviceDetails(List<DeviceDetails> device)
        {
            DeviceDetailsService deviceService = new DeviceDetailsService();
            //Employee employee = new Employee();
            deviceService.SaveDeviceDetails(device);
            return Json(device);
        }
        //[HttpPost]
        //public ActionResult GetUploadeddocuments(ImageModel image)
        //{
        //    ImageService imageService = new ImageService();

        //    imageService.GetAllFiles();
        //    byte[] imageData = image.EmployeeImage;
        //    if (imageData != null && imageData.Length > 0)
        //    {
        //        return new FileStreamResult(new System.IO.MemoryStream(imageData), "image/jpeg");
        //    }

        //    return View();
        //}
        public ActionResult EditPersonalDetails(Int64 EmployeeNumber)
        {
            EmployeeRepository empService = new EmployeeRepository();
            return View(empService.GetEmployee().Where(employee=> employee.EmployeeNumber == EmployeeNumber).FirstOrDefault());
        }
        [HttpPost]
        public ActionResult EditPersonalDetails(Int64 EmployeeNumber, GetEmployeeModel updateemployee)

        {
            EmployeeService empService = new EmployeeService();
            String message=empService.UpdateEmployee(updateemployee);

            return RedirectToAction("GetAllEmployees", new { message });
        }
        public ActionResult EditEmployeeDetails(Int64 EmployeeNumber, String FirstName, String LastName)
        {
            EmployeeRepository empService = new EmployeeRepository();
            return View(empService.GetEmployee().Where(employee => employee.EmployeeNumber == EmployeeNumber).FirstOrDefault());
        }
        public ActionResult EditEmergencyContacts(Int64 EmployeeNumber)
        {
            EmergencyContactsRepository empService = new EmergencyContactsRepository();
            return View(empService.GetEmergencyContacts().Where(emergency => emergency.EmployeeNumber == EmployeeNumber).FirstOrDefault());
        }
        [HttpPost]
        public ActionResult EditEmergencyContacts(Int64 EmployeeNumber, EmergencyContact updateemergency)

        {
            EmergencyContactsService empService = new EmergencyContactsService();
            String message=empService.UpdateEmergencyContactsDetails(updateemergency);
            return RedirectToAction("GetAllEmployees", new { message });
        }

        [HttpPost]
        public ActionResult UploadPhoto(EmployeeImageModel image, HttpPostedFileBase file)
        {
            try
            {
                //if (file != null && file.ContentLength > 0)
                //    try
                //    {
                //        string path = Path.Combine(Server.MapPath("~/Images"),
                //                                   Path.GetFileName(file.FileName));
                //        file.SaveAs(path);
                //        ViewBag.Message = "File uploaded successfully";


                //        image.EmployeeImage= new byte[file.ContentLength];
                //        file.InputStream.Read(image.EmployeeImage, 0, file.ContentLength);
                //        ImageService imageService = new ImageService();

                //        imageService.SaveImage(image);

                //        return Json("Uploaded Successful");

                //    }
                //    catch (Exception ex)
                //    {
                //        ViewBag.Message = "ERROR:" + ex.Message.ToString();
                //    }
                //else
                //{
                //    ViewBag.Message = "You have not specified a file.";
                //}
                //return View();
                String FileExt = Path.GetExtension(file.FileName).ToUpper();
                EmployeeImageService imageService = new EmployeeImageService();
                if (FileExt == ".JPG")
                {

                    Stream str = file.InputStream;
                    BinaryReader Br = new BinaryReader(str);
                    Byte[] FileDet = Br.ReadBytes((Int32)str.Length);

                    image.EmployeeNumber = (Int64)Session["empId"];
                    image.FileDescription = "EmployeeImage";
                    image.FileName = file.FileName;
                    image.FileContent = FileDet;
                    imageService.SaveEmployeeImage(image);
                    return Json("Photo Uploaded Successfully");
                }
                else
                {

                   
                    return Json("Invalid file format");

                }


            }
            catch (Exception ex)
            {
                
                return Json("Upload failed");
            }
        }
        [HttpGet]
        public FileResult DownLoadFile()
        {

            EmployeeImageService imgService = new EmployeeImageService();
            List<EmployeeImageModel> ObjFiles = imgService.GetAllFiles();

            var FileById = (from FC in ObjFiles
                            where FC.EmployeeNumber.Equals((Int64)Session["empId"])
                            select new { FC.FileName, FC.FileContent }).ToList().FirstOrDefault();

            return File(FileById.FileContent, "image/jpg");

        }

        public PartialViewResult FileDetails()
        {

            EmployeeImageService imgService = new EmployeeImageService();
            List<EmployeeImageModel> DetList = imgService.GetAllFiles();

            return PartialView("FileDetails", DetList);


        }

        [HttpPost]
        public ActionResult Upload(IEnumerable<HttpPostedFileBase> files, List<String> FileDescription)
        {
            String Message=null;
            EmployeeFilesModel model1 = new EmployeeFilesModel();

            try
            {

                var i = 0;
                foreach (var file in files)
                {

                    //string path = AppDomain.CurrentDomain.BaseDirectory + "Uploads/";  
                    //string filename = Path.GetFileName(Request.Files[i].FileName);  




                    String FileExt = Path.GetExtension(file.FileName).ToUpper();
                    AddFilesService service = new AddFilesService();
                    if (FileExt == ".PDF")
                    {

                        Stream str = file.InputStream;
                        BinaryReader Br = new BinaryReader(str);
                        Byte[] FileDet = Br.ReadBytes((Int32)str.Length);



                        model1.EmployeeNumber = (Int64)Session["empId"];
                        model1.FileDescription = FileDescription[i];

                        model1.FileName = file.FileName;
                        model1.FileContent = FileDet;
                        service.SaveAllFiles(model1);


                        i++;
                        Message = "Record Inserted Successfully!";
                    }
                    else
                    {

                       Message = "Invalid file format.";


                    }
                }
               

            }
            catch (Exception ex)
            {
                 Message = "Upload failed";

            }
            return RedirectToAction("Success");
        }
       
        public ActionResult Success()
        {
            return View();
        }
    }
}