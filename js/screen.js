/*  COPYRIGHT 2012-2016 Robert Michael Welan */
(function (w) {
  w.sfs = new SCREEN_FRAME_SET();
})(window);

function SCREEN_FRAME_SET () {
//
  this.make_visible_class = 'visible-screen';
  this.preloader = '#pre-loader';
  this.home = '#home';
  this.has_launched = false;

  this.autoLaunch = function (pl) {
    if (pl === true) {
      $(this.preloader).show();
      $(this.preloader).addClass(this.make_visible_class);
    } else {
      $(this.home).show();
      $(this.home).addClass(this.make_visible_class);
    } // pl = true / false
    this.has_launched = true;
  }; //  autoLaunch

  this.getIDOfVisibleScreen = function () {
    var vs = $(returnFormattedClass(this.make_visible_class)).attr('id');
    vs = returnFormattedID(vs);
    return vs;
  };

  this.start = function (sJ) {
    var breakLoop = false;
    var goToPage = this.home; //  set to default home page for now...

    if (sJ !== null && typeof sJ === 'object') {
    //  window.alert(JSON.stringify(sJ))
      $.each(sJ, function (gs, bolCheck) {
        if (bolCheck === false && !breakLoop) {
          goToPage = gs;
          breakLoop = true;
        }
      });
    }
    this.changePage(goToPage);
    this.has_launched = true;
  };

  this.changePage = function (id) {
    var vs = this.getIDOfVisibleScreen();
    vs = returnFormattedID(vs);
    id = returnFormattedID(id);
    $(vs).removeClass(this.make_visible_class);
    $(vs).hide();
    $(id).show();
    $(id).addClass(this.make_visible_class);
    $(id).css({'display': 'flex'}); // resize flex to screen, or else the user interface will be wonky now...
  };

  this.forceRestart = function () {
    window.location.reload(true);
  };

//
} //  SCREEN_FRAME_SET

function returnFormattedClass (s) {
  if (s.charAt(0) !== '.') {
    s = '.' + s;
  }
  return s;
}
function returnFormattedID (s) {
  if (s.charAt(0) !== '#') {
    s = '#' + s;
  }
  return s;
}

/*  Special Navigation Functions */
$(document).ready(function () {
  $('.sfs-on-click').click(function () {
    var id = $(this).attr('href');

    switch (id) {
      case '#':
        /* DO NOTHING */
        break;
      case '#sfs-restart': case 'sfs-restart':
        window.sfs.forceRestart();
        break;
      default:
        window.sfs.changePage(id);
    }
  }); /* .sfs-on-click... */
}); /* document.ready... */
