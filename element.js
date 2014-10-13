/**
 * Base element class.
 * Provides basic functionalities for easier element parsing in cross browser environment
 *
 * @method jsW.id
 * @public
 *
 * @param   {Object} jsW
 *
 * @return  {jsWDom}
 */
var jsW = (function ( jsW ) {

   /**
    * [id description]
    *
    * @method  id
    * @private
    *
    * @param   {[type]} el
    * @param   {[type]} container
    *
    * @return  {[type]}    [description]
    */
   jsW.id = function ( el, container ) {
      var instance = this instanceof jsW.id;

      // Involc "new" operator, to ease the usage
      if( !instance ){
         return new jsW.id(el);
      }

      container = container || document;

      if ( typeof el === 'string' ) {
         this.el = container.getElementById( el );
      } else if ( jsW.isElement(el) ) {
         this.el = el;
      } else if (instance) {
         this.el = el;
      } else {
         // not working properly, so fix it
         throw jsW.exception('Argument is of wrong type');
      }
   }

   return jsW;
}( jsW || {} ));