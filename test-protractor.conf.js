exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['test/e2e/*.js'],
	baseUrl: 'http://localhost:9001',
	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true, // Use colors in the command line report.
	},
	onPrepare: function(){
		global.isAngularSite = function(flag){
			browser.ignoreSynchronization = !flag;
		};
	}
};