
function getObj () {
	return import(/* webpackChunkName: "vendor1" */ './vendor1').then( vendor1 => {
		return {
			name: vendor1()
		}
	}).catch(err => 'Error while loading. Whoops!')
}

getObj().then( obj => {
	console.log(obj.name)
})
