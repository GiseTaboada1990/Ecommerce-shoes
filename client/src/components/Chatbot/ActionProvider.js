class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage(
        `Hi Folk!😁 ${`\n`}
         How may I help you?`
      );
      this.updateChatbotState(greetingMessage);
    }
  
    handleEnvios = () => {
      const message = this.createChatBotMessage(
        "Los envios son gratis a todo el país.",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };
  
    handlePedido = () => {
      const message = this.createChatBotMessage(
        "Una vez que nuestro almacen termine la preparacion de tu pedido, YourShoes realizara la entrega en la direccion registrada en la orden de 4 (cuatro) a 7 (siete) dias habiles en Ciudad Autonoma de Buenos Aires y hasta 10 (diez) dias habiles en resto del pais",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };
  
    handleIncorrecto = () => {
      const message = this.createChatBotMessage(
        "En caso de que YourShoes haya enviado un artículo diferente al solicitado, deberás comunicarte con cualquier miembro de nuestro staff via e-mail para iniciar un proceso de reclamo y devolución",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };

    handleCarrito = () => {
      const message = this.createChatBotMessage(
        "Dentro de la tienda online, es posible realizar cambios en los productos que fueron agregados en mi carrito, ya sea agregando un producto, varias cantidades de ese mismo producto, eliminando uno o varios productos, o limpiando el carrito completamente.",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };

    handleCancelarPedido = () => {
      const message = this.createChatBotMessage(
        "Lamentablemente no es posible solicitar la cancelación de un pedido una vez que hayas realizado el pago del mismo. Cuando hayas recibido tu pedido podes inciar un reclamo via e-mail con nuestro staff solicitando un cambio de tu artículo.",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };

    
    handleNecesitoUsuario = () => {
      const message = this.createChatBotMessage(
        "Registrarte es necesario, ya que en el formulario de registro va a figurar tu localidad y direccion a la podremos enviar el artículo solicitado.",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };

    handleCrearUsuario = () => {
      const message = this.createChatBotMessage(
        "¡Crear una cuenta es muy fácil y rápido! Podes crear una cuenta YourShoes asociada a tu correo electronico o podes registrate con tu cuenta de Google." +
        "Creá una cuenta YourShoes"+
           "Hacé click en el icono de persona en la esquina superior derecha de nuestra pagina web y luego elegi Registrate o Accede con google." +
           "En caso de elegir la opcion de Registrate, introducí los datos personales necesario en el formulario de registro." +
            "Hacé click en Enviar."+
            "Finalmente ingresa el e-mail y contraseña con el que te hayas registrado..",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };

    handleReclamo = () => {
      const message = this.createChatBotMessage(
        "Para YourShoes tu experiencia de compra y servicio es lo más importante, por eso nos interesa tu opinion. En la parte del detalle de cualquier artículo podras ver una seccion de" + ' ' + "opiniones" +', '+ "ahí podrás dejar cualquier comentario sobre tu experiencia de compra y producto (sea buena o mala)",

        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "Oops! Si no seleccionaste alguna opcion, por favor hazlo",
      
      );
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider;
  