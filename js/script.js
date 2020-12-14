 $(function() {
	   
      // Create the dropdown base
      $("<select />").appendTo("container sticky");
      
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Helloo"
      }).appendTo("container sticky select");
      
      // Populate dropdown with menu items
      $("container sticky a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("container sticky select");
      });
      
	   // To make dropdown actually work
	   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
      $("container sticky select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
	 
	 });



