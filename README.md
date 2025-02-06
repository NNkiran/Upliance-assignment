                                                  📌 React Components Guide
                                                     
This project contains three React components: Counter, UserForm, and RichTextEditor. Each component serves a different purpose, and their functionalities are explained below.

🔢 **1. Counter Component**

            📝 Description:
            
            The Counter component provides a simple counter with dynamic background color changes based on the count value.
            
            ✨ Features:
            
              ✅ Displays a count value.
            
              🔼 Provides Increment, Decrement, and Reset buttons.
            
              🎨 Background color changes dynamically based on the count.
            
            📁 File: Counter.js
            
              🔍 How It Works:
            
                  Uses useState to manage the count.
            
                  A function getBackgroundColor() determines the background color based on the count.
            
                  Three buttons allow the user to increase, decrease, or reset the count.

📝 **2. UserForm Component
**
            📝 Description:
            
              The UserForm component allows users to input their details and save them to localStorage.
            
            ✨ Features:
            
                📌 Inputs for name, address, email, and phone.
                
                💾 Data is stored in localStorage upon form submission.
                
                ⚠️ Warns users about unsaved changes before leaving the page.
                
                📁 File: UserForm.js
            
            🔍 How It Works:
            
                  Uses useState to track form inputs.
                  
                  Uses useEffect to handle the beforeunload event for unsaved changes.
      
                  Saves data to localStorage upon form submission.
                  
                  A Save button is disabled unless changes are made.
            
  📝 **3. RichTextEditor Component**
            
            📝 Description:
            
            The RichTextEditor component provides a text editor with formatting options.
            
            ✨ Features:
            
                ✍️ Supports bold, italic, underline, and unordered lists.
                
                💾 Content is editable and saved to localStorage.
    
                ✅ Alerts users upon successful save.
                
                📁 File: RichTextEditor.js
            
            🔍 How It Works:
            
                  Uses useState to manage content.

                  Uses useRef to reference the editor.
                  
                  Uses document.execCommand to apply formatting.
                  
                  Saves content to localStorage and alerts the user.

