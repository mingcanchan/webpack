import './css/common.css';
import Layer from './components/layer/layer.js';
const App = function(){
	const layer = new Layer();
	const dom = document.getElementById("app");
	dom.innerHTML=layer.tpl({
		name: 'demo',
		arr: ['xiaomi','apple','huawei']
	});
}
new App()