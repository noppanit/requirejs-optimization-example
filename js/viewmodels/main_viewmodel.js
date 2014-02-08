define(['knockout'], function(ko) {
	var MainViewModel = function() {
		var self = this;
		self.name = ko.observable();
		self.surname = ko.observable();

		self.fullname = ko.computed(function() {
			return self.name() + ' ' + self.surname(); 
		});

	};

	return MainViewModel;
});
