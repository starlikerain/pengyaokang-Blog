;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiantouxia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.076236 880.533494c-14.372336 0-28.752858-5.482875-39.71963-16.457834L42.679543 434.399621c-21.942755-21.934568-21.942755-57.504692 0-79.431074 21.934568-21.934568 57.496505-21.942755 79.431074 0L512.076236 744.923934l389.519458-389.529691c21.935592-21.934568 57.504692-21.934568 79.43926 0 21.935592 21.942755 21.935592 57.504692 0 79.43926L551.795866 864.075661C540.828071 875.042433 526.455735 880.533494 512.076236 880.533494L512.076236 880.533494z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M108.065 282.189h807.686c21.101 0 38.348-17.247 38.348-38.348s-17.063-38.348-38.348-38.348h-807.686c-21.101 0-38.348 17.247-38.348 38.348s17.247 38.348 38.348 38.348z"  ></path>' +
    '' +
    '<path d="M915.751 473.744h-807.686c-21.101 0-38.348 17.247-38.348 38.348s17.247 38.348 38.348 38.348h807.686c21.101 0 38.348-17.247 38.348-38.348s-17.247-38.348-38.348-38.348z"  ></path>' +
    '' +
    '<path d="M915.751 741.811h-807.686c-21.101 0-38.348 17.063-38.348 38.348s17.247 38.348 38.348 38.348h807.686c21.101 0 38.348-17.063 38.348-38.348s-17.247-38.348-38.348-38.348z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)