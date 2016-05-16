const Main = imports.ui.main;

let old_height;
let new_height = 33;

function init() {
}

function enable() {
	old_height = Main.panel.actor.height;
	Main.panel.actor.height = new_height;
}

function disable() {
	Main.panel.actor.height = old_height;
}
