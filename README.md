# Gnome Top Panel Resize

Change the size of the Gnome-Shell Top Panel.

## Installing from source

Clone the desired branch

<pre>git clone https://github.com/sassmann1/gnome-shell-extension-panel_size.git</pre>

Copy the directory 'panel_size@sassmann' to ~/.local/share/gnome-shell/extensions/

Reload Gnome-Shell with <code>Alt+F2</code> <code>r</code> <code>Enter</code> then enable the extension via *gnome-tweak-tool* or *dconf*.

## Changing the Top Panel height

Currently the height is hardcoded in extension.js. If you want your panel to have a different size simply change the value of new_height to the desired value. Don't forget to reload Gnome-Shell after making any change.

## License

Gnome Top Panel Resize is distributed under the terms of the GNU General Public License v2.
See the LICENSE files for details.
