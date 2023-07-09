using System;
namespace MVC.Models
{
    public class Roles
    {   
        private string? _roles;
        private int _id;
        public string? Rols
        {
            get
            {
                return _roles;
            }
            set
            {
                _roles = value;
            }
        }
        public int Id
        {
            get
            {
                return _id;
            }
            set
            {
                _id = value;
            }
        }
    }
}