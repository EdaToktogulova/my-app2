import React from 'react';

function ArticleCreate() {
      const onFormSubmit = function (event) {
      const formData = new FormData(event.target);
      
   }

   return (
      <form>
         <div>
            <label>
               Title
               <input type="text" name="title" required />
            </label>
         </div>
         <div>
            <label>
               Description
               <textarea name="description"></textarea>
            </label>
         </div>
         <button>Submit</button>
      </form>
   )
}

export default ArticleCreate;
