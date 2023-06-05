using System;
namespace MVC.Models
{
    public class Policia
    {   
        private int _DNI;
        private string? _nombre;
        private string? _numeroPlaca;
        private string? _rol;
        private DateTime? _fechaNacimiento;
        private string? _password;
        
        public int DNI
        {
            get
            {
                return _DNI;
            }
            set
            {
                _DNI = value;
            }

        }
        public string? Nombre
        {
            get
            {
                return _nombre;
            }
            set
            {
            _nombre = value;
            }
        }
        public string? NumeroPlaca
        {
            get
            {
                return _numeroPlaca;
            }
            set
            {
                _numeroPlaca = value;
            }
        }
        public string? Rol
        {
            get
            {
                return _rol;
            }
            set
            {
                _rol = value;
            }
        }
        public DateTime? FechaNacimiento
        {
            get
            {
                return _fechaNacimiento.Value.Date;
            }
            set
            {
                _fechaNacimiento = value;
            }
        }
        public string? Password
        {
            get
            {
                return _password;
            }
            set
            {
                _password = value;
            }
        }
        
    }
}