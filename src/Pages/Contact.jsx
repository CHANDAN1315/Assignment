import { useState } from "react";

function Contact() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (e) => {
      // e.preventDefault will prevent the to be lost
      e.preventDefault();
      // storing the contact data in local storage if there is DB then we will  store in it.
      localStorage.setItem("Userquery", JSON.stringify({query: {name, email, message}}))
   };

   return (
      <>

         <div className="App">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="">
               <div className="content">
                  <div className="inputlable">
                     <label htmlFor="Name">User Name :</label>
                     <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div className="inputlable">
                     <label htmlFor="email">Email :</label>
                     <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="inputlable">
                     <label htmlFor="message">Ask Us :</label>
                     <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                     />
                  </div>
               </div>


               <button type="submit" className="add-button">Submit</button>
            </form>
         </div>
      </>


   );
};

export default Contact;