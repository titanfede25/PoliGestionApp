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

    public IActionResult Index(Policia Pol, int idPolicia)
    {
        ViewBag.Lista = BD.ListarPolicias(); 
        return View();
    }
    public IActionResult AgregarPolicia(int idPolicia){ 
        ViewBag.idPolicia = idPolicia;
        return View();
    }

    public IActionResult EliminarPolicia(int idPolicia, int IdMarca){
        BD.EliminarPolicia(idPolicia);
        return RedirectToAction("Index", new {pId = idPolicia});
    }
    
}