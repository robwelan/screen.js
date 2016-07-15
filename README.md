# screen
An HTML5 Web Hybrid Mobile App Framework using a non-traditional approach

##Why Screen:
  Screen provides a layer between an existing web framework (eg. http://materializecss.com/) and the mobile device. Some web frameworks are built from the point of view of creating a responsive iteration of a web site - and this is a good thing. However, that responsive iteration may not be ideal to use as a Mobile App Framework.
  The point of screen is to provide a "layer" in order to use the web framework of your choice, and to extend it in a Mobile App Framework way, without too much heavy lifting.
  
##JQuery:
 Screen is built with JQuery 3.0.0 in mind.
  
##HTML:

###Basic Screen
      
      <body>
        <screen>
          <screen-header>
            <p>Your Header</p>
          </screen-header>
          <screen-content>
            <p>Content goes here.</p>
          </screen-content>
          <screen-footer>
            <p>The footer</p>
          </screen-footer>
        </screen>
      </body>
      
###Navigation Buttons
Recommended for your ```<screen-footer>``` or ```<screen-header>```

      <div class="nav-buttons">
        <a class="screen-width-100" href="javascript:window.sfs.forceRestart();"><i class="material-icons">refresh</i></a>
        <div class="clear"></div>
      </div>
  
We'll talk about the ```forceRestart()``` item in the JavaScript section further below.
   
##CSS

    .screen-width-XX

where XX is a number. The options are 100, 50, 33, 25, and 20. This item is best coupled with the .nav-buttons <div> class.

    .nav-buttons

useful to create a button or buttons in your navigation bar. Horizontally. No more than 5 buttons on your nav bar in a row.

    .vertical-align-content

to force the vertical alignment of your content. It might work. It might not. Give it a go. The framework you are using may have a vertical alignment class by-the-way (use that first, then try this one, and you're still experiencing a fail, build your own for your situation in your custom css file.
  
##JavaScript
Screen creates a Window Object called <strong>sts</strong>.
  
###sfs.preloader
Defaults to <strong>#pre-loader</strong>. You can create a ```<screen id="pre-loader">```, and Screen will launch with that preloader. Keep reading for 'how'.

###sfs.home
Defaults to <strong>#home</strong>. You need to create a ```<screen id="home">```. Otherwise, no screen will load in your interface.

###sfs.autoLaunch(pre-loader)
Set 'pre-loader' to **true** if you want the pre-loader to launch first. Otherwise set to **false** if you want to launch directly to the home page. You may need to put this command into a window.setTimeout in order to allow the device to initialize enough. PhoneGap can be funny.

###sfs.start(JSON)
JSON is optional. An example of use:

    {"no-network": true, "no-geolocation": false}

You will need to build code to create your JSON. If a variable is **true**, your App will be directed to load the screen with the ID to the left of it. In the case above, your App should load the <screen id="no-network">.
      If you have a double-whammy, the first **true** option will load (only). Yeah, if there are multiple errors generated, it could take your user a while to work through the error screens that are generated.
      
      If an error is generated, it's recommended providing a button with the action of 'window.sfs.forceRestart()'.
      
      If no JSON is provided, or, no **true** variables are found in the JSON ojbect, Screen will load your <screen id="home"> page.
      
  ###sfs.changePage(id)
    Used to navigate to a new page. When you use this command, Screen will load <screen id="id"> (where id is whatever you called your screen).
