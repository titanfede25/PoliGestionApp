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
            return View();
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
        
        public IActionResult ModificarPolicia(int idPolicia)
        {
            ViewBag.IdPoliModi = BD.ObtenerPolicias(idPolicia);

            if (ViewBag.IdPoliModi == null)
            {
                return RedirectToAction("ListarPolicias");
            }

            return View(ViewBag.IdPoliModi);
        }

        [HttpPut("{idPolicia}")]
        [ValidateAntiForgeryToken]
        public IActionResult GuardarPolicia2(Policia Pol, int idPolicia)
        {
            BD.ModificarPolicia(Pol, idPolicia);
            return RedirectToAction("ListarPolicias");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult GuardarPolicia(Policia Pol)
        {
            BD.AgregarPolicia(Pol);
            return RedirectToAction("ListarPolicias", new { idPolicia = Pol.Idpolicia });
        }

        [HttpDelete("{idPolicia}")]
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