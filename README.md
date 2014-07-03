

Force Quit is an extension that adds a 'Force Quit' button to the top panel of gnome shell, the UI of Gnome 3. Clicking the 'x' icon from the left of the gnome-shell panel changes the cursor into a 'x'. Then, click over a non-responding application to kill it instantly.

Handy if you're prone to working with unstable software *grin*

**[Note: This extension isn't maintained any more.]**

This extension employs 'xkill' on the backend.

##Installation:##
From Gnome Shell Extensions Directory:  
[https://extensions.gnome.org/extension/102/force-quit/](https://extensions.gnome.org/extension/102/force-quit/)

**Or Manually**

Download:  
`cd ~/.local/share/gnome-shell/extensions`  
`git clone https://github.com/xtranophilist/gnome-shell-extension-force-quit.git`  
`mv gnome-shell-extension-force-quit/ force-quit@xtranophilist`  

Restart Gnome:  
Alt+F2 to open run command prompt   
Enter r  

Enable `Force Quit Extension` from Extensions from `gnome-tweak-tool`.  

Superpiffer has created a package for archlinux in [https://aur.archlinux.org/packages.php?ID=55879](AUR).  

If it doesn't work on your system, maybe you don't have xkill.  
jjmarin on GSE says "In fedora you need to install the package xorg-x11-apps in order to get the xkill".  
