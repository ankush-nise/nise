//[Data Table Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the Data Table

$(function () {
    "use strict";

    $('#example').DataTable({});
	$('#exampleAudit').DataTable({
		"aaSorting" : [[5, 'desc']],
		});
    $('#example2').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    });
	
	
	$('#example1').DataTable( {
		dom: 'Bfrtip',
		"order": [[ 0, "asc" ]],
		"aaSorting" : [[0, 'asc']],
		'lengthChange': true,
		'lengthMenu': [[50, 100, 500, -1], [ 50, 100, 500, "All"]],
		'ordering'    : true,
		'lengthChange': false,
		buttons: [
			 'excel', 'pdf', 'print'
		]
	} );
	
	$('#tickets').DataTable({
	  'paging'      : true,
	  'lengthChange': false,
	  'searching'   : false,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : false,
	});
	
	$('#employeelist').DataTable({
	  'paging'      : true,
	  'lengthChange': false,
	  'searching'   : true,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : false,
	});
	
  }); // End of use strict