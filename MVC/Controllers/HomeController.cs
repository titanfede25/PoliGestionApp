using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using Dapper;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVC.Models;

namespace MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult ListarPolicias(Policia Pol, int Idpolicia)
        {
            ViewBag.Lista = BD.ListarPolicias();
            return View();
        }


        public IActionResult ObtenerPolicias(int idpolicia)
        {
            ViewBag.IdObtenerPoli = BD.ObtenerPolicias(idpolicia);
            return RedirectToAction("ListarPolicias");
        }

        [HttpPost]
        public IActionResult ModificarPolicia(Policia Pol, int idPolicia)
        {
            Policia Poli = BD.ObtenerPolicias(idPolicia);

            if (Poli == null)
            {
                return RedirectToAction("ListarPolicias");
            }

            Poli.Nombre = Pol.Nombre;
            Poli.NumeroPlaca = Pol.NumeroPlaca;
            Poli.Rol = Pol.Rol;
            Poli.FechaNacimiento = Pol.FechaNacimiento;

            BD.ModificarPolicia(Poli, Poli.Idpolicia);

            return RedirectToAction("ListarPolicias");
        }

        [HttpPost]
        [Route("poli")]
        [ValidateAntiForgeryToken]
        public IActionResult GuardarPolicia2(Policia Pol, int Idpolicia)
        {
            BD.ModificarPolicia(Pol, Idpolicia);
            return RedirectToAction("ListarPolicias");
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AgregarPolicia(int idPolicia)
        {
            ViewBag.IdPolicia = idPolicia;
            return View();
        }

        [HttpPost]
        [Route("policiass")]
        [ValidateAntiForgeryToken]
        public IActionResult GuardarPolicia(Policia Pol)
        {
            BD.AgregarPolicia(Pol);
            return RedirectToAction("ListarPolicias", new { idPolicia = Pol.Idpolicia });
        }

        [HttpPost("{idPolicia}")]
        public IActionResult EliminarPolicia(int idPolicia)
        {
            BD.EliminarPolicia(idPolicia);
            return RedirectToAction("ListarPolicias", new { Idpolicia = idPolicia});
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(string username, string password)
        {
            Console.WriteLine("llegue");
            if (username == "admin" && password == "juanito123")
            {
                return RedirectToAction("ListarPolicias", "Home");
            }
            else
            {
                return RedirectToAction("Error", "Home");
            }
        }
    }
}