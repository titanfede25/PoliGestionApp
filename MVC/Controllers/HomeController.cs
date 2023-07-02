using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVC.Models;

namespace MVC.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }


    public IActionResult Index(Policia Pol, int Idpolicia)
    {
        ViewBag.Lista = BD.ListarPolicias(); 
        return View();
    }
    public IActionResult AgregarPolicia(Policia Pol){ 
        BD.AgregarPolicia(Pol);
        return RedirectToAction("Index");
    }

    public IActionResult EliminarPolicia(int Idpolicia, int IdMarca){
        BD.EliminarPolicia(Idpolicia);
        return RedirectToAction("Index", new {pIdPolicia = Idpolicia});
    }
    
}