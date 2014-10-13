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
      // Involc "new" operator, to ease the usage
      if( !(this instanceof jsW.id) ){
         return new jsW.id(el);
      }
console.log(jsW);
      container = container || document;

      if ( typeof el === 'string' ) {
         this.el = container.getElementById( el );
      } else if ( jsW.isElement(el) ) {
         this.el = el;
      } else {
         jsW.exception('Argument is of wrong type');
      }
   }

   return jsW;
}( jsW || {} ));