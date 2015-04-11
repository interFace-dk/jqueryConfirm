# jqueryConfirm
## Install
bower
## Settings
###ajax: boolean
Uses jQuery Ajax if true
Uses Form if false
####method: string (GET|POST|PUT|DELETE)
The HTTP verb to use.
If ajax is false and the verb is PUT|DELETE, the method is set in a hidden field called method \_method
####dataType: null|string (xml|json|script|html)
*Ajax only*
The dataType the jQuery Ajax request uses (see: http://api.jquery.com/jquery.ajax/)
####route: string|null
the URL to send the request to
Uses the selectors href attribute if null
####data: Object
Extra data to send in the request
If ajax is false, the fields is included as hidden field.
####message: string
The message in the confirm box. defailt is 'Are you sure you want to delete?
####onAjaxSuccess: function
*Ajax only*
Callback if the ajax request is successfull
####onAjaxFailure: function
*Ajax only*
Callback if the ajax request fails
