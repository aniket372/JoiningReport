using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Adv.Emp.Model;
using Adv.Emp.Service;
using Adv.Emp.Model.Models;

namespace EmployeeJoiningReport.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Index
        public ActionResult Index()
        {
            return View();
        }

      

       
        [HttpPost]
        public ActionResult CreateEmployee(Employee employee)
        {
            EmployeeService empService = new EmployeeService();
            //Employee employee = new Employee();
            Int64 sample = empService.AddEmployee(employee);
            Session["empId"] = sample;
            return Json(employee);
        }
        public ActionResult GetAllEmployees(Employee employee)
        {
            EmployeeService empService = new EmployeeService();
            //Employee employee = new Employee();
            empService.GetAllEmployee();

            return View(empService.GetAllEmployee());
        }


        [HttpPost]
        public ActionResult CreateEmergencyContacts(EmergencyContact emergency)
        {

            EmergencyContactsService emergencyService = new EmergencyContactsService();
            emergency.EmployeeNumber = (Int64)Session["empId"];
            //Employee employee = new Employee();

            emergencyService.SaveEmergencyContacts(emergency);
            return Json(emergency.EmployeeNumber);
        }
        [HttpPost]
        public ActionResult CreateInsuranceDetails(List<InsuranceDetails> insurance)
        {
            // insurance.Add(new InsuranceDetails { EmployeeId = (Int64)Session["empId"] });


            InsuranceDetailsService insuranceService = new InsuranceDetailsService();
            //Employee employee = new Employee();

            insuranceService.SaveInsuranceDetails(insurance);
            return Json(insurance);
        }
        [HttpPost]
        public ActionResult CreateDocumentDetails(List<DocumentDetails> document)
        {
            DocumentDetailsService documentService = new DocumentDetailsService();

            documentService.SaveDocumentDetails(document);
            return Json(document);
        }
        [HttpPost]
        public ActionResult CreateDeviceDetails(List<DeviceDetails> device)
        {
            DeviceDetailsService deviceService = new DeviceDetailsService();
            //Employee employee = new Employee();
            deviceService.SaveDeviceDetails(device);
            return Json(device);
        }
        // POST: Index/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Index/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Index/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Index/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Index/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
