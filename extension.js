const Lang = imports.lang;
const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const Util = imports.misc.util;
const GLib = imports.gi.GLib;

function ForceQuit() {
    this._init();
}

ForceQuit.prototype = {
    __proto__: PanelMenu.SystemStatusButton.prototype,

    _init: function() {
        PanelMenu.SystemStatusButton.prototype._init.call(this, 'start-here');
        this._button = new St.Bin({
            style_class: 'panel-button'
        });

        let icon = new St.Icon({
            icon_name: 'window-close',
            icon_type: St.IconType.SYMBOLIC,
            icon_size: 17
        });

        this._button.set_tooltip_text('Double Click me and select a Window to kill!');
        this._button.add_actor(icon, {
            expand: false
        });
        this._button.set_child(icon);
        this._button.connect('button-press-event', Lang.bind(this, function () {
            Util.spawn(['xkill']);
        }));
    }

};

let forceQuit;

function enable() {
    forceQuit = new ForceQuit();
    Main.panel._leftBox.insert_actor(forceQuit._button, 2);
}

function disable() {
    Main.panel._leftBox.remove_actor(forceQuit._button);
    forceQuit.destroy();
}

function init() {
// do nothing
}
