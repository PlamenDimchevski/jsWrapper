var jsW = (function ( jsW ) {

   /**
    * [isElement description]
    *
    * @method  isElement
    * @public
    *
    * @param   {Object}  obj
    *
    * @return  {Boolean}
    */
   if ( typeof HTMLElement === "object" ) {
      //
      // Using W3 DOM2 (works for FF, Opera and Chrom)
      jsW.isElement = function ( obj ) {
         return obj instanceof HTMLElement;
      }
   } else {
      //
      // Browsers not supporting W3 DOM2 don't have HTMLElement and
      // an exception is thrown and we end up here. Testing some
      // properties that all elements have. (works on IE7)
      jsW.isElement = function ( obj ) {
         return typeof obj === "object" && obj.nodeType !== "undefined" && obj.nodeType === 1
      }
   }

   /**
    * [exception description]
    *
    * @method  exception
    * @private
    *
    * @param   {[type]}  message
    *
    * @return  {[type]}          [description]
    */
   jsW.exception = function ( message ) {
      throw { message : message };
   }

   return jsW;
}( jsW || {} ));