import camelCase from 'lodash/camelCase';

const requireModule = require.context(
	'.',
	true,
	/^(?!.*(actions|mutations|getters|index)).*\.js$/
);

const modules = {};

requireModule.keys().forEach(fileName => {
	// Игнорируем файлы модульных тестов
	if (/\.unit\.js$/.test(fileName)) return;
	// Избавляемся от расширений файлов для преобразования их имён к верблюжьему стилю
	modules[camelCase(fileName.split('/')[1].replace(/(\.\/|\.js)/g, ''))] = {
		namespaced: true,
		...requireModule(fileName).default
	};
});

export default modules;