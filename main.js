const app = new Vue({
    el: '#appVue',
    data: {
        formulario:[],
        Name: '',
        User:'',
        Edad:'',
        Direccion:'',
        Conyuge:'',
        Hijos:''
    },
    // en VUE dentro de metodos es donde se crean las funciones o metodos que le daran dinamismo al componente.
    methods:{
        
        // funcion para copiar el formulario, esta funcion guarda el formulario en un objeto dentro del local storage.
        copyForm: function(){
            
            //este if valida que el formualrio sea guardado una vez, para no duplicar informacion.
            if(this.formulario.length <=0){
                
                // este push enpuja el objeto creado dentro de la variable o arrays formulario.
                this.formulario.push({
                    Name: this.Name, 
                    User: this.User, 
                    Edad: this.Edad, 
                    Direccion: this.Direccion, 
                    Conyuge: this.Conyuge, 
                    Hijos: this.Hijos
                });
               
                // este codigo se utiliza para guardar el objeto en formato json dentro del local storage.
                localStorage.setItem('localStorageForm', JSON.stringify(this.formulario));
            }
        },
        pasteForm: function(){
            
            // este codigo se utiliza para consultar el objeto en formato json dentro del local storage.
            const datosLS = JSON.parse(localStorage.getItem('localStorageForm'));
                
            // declarando las variables con los diferentes datos dentro del objeto LocalStorageForm.
                this.Name = datosLS[0].Name;
                this.User = datosLS[0].User;
                this.Edad = datosLS[0].Edad;
                this.Direccion = datosLS[0].Direccion;
                this.Conyuge = datosLS[0].Conyuge;
                this.Hijos = datosLS[0].Hijos;
        },
        clearForm: function(){
            
            // este codigo se utiliza para eliminar el objeto guardado en el local storage.
            localStorage.removeItem('localStorageForm');
        },
    }        
});

