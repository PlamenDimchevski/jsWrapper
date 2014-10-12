var jsW = (function ( jsw ) {

   Object.defineProperties( Object.prototype, {
      each : {
         value : function ( callback, reference ) {
            var object = this;

            if ( object === null ) {
               throw new TypeError( "Object is null or not defined" );
            }

            if ( typeof callback !== "function" ) {
               throw new TypeError( callback.toString() + " is not a function" );
            }

            for ( var item in object ) {
               callback.call( reference, object[item], item, object );
            }
         }
      },

      extend : {
         value : function () {
            var object = this;

            if ( object === null ) {
               throw new TypeError(" this is null or not defined");
            }
         }
      },

      from : {
         value : function () {
         }
      }

   });

   Object.defineProperties( Array.prototype, {
      each : {
         value : Array.forEach
      },

      extend : {
         value : function () {
            var input = this.from( arguments );

            for ( var i = 0, l = input.length; i < l; i ++ ) {
               this.push( input[i] );
            }

            return this;
         }
      },

      from : {
         value : function () {
            var input = [].slice.call( arguments );
            var full_array = [];

            for ( var i = 0, l = input.length; i < l; i ++ ) {

               if ( typeof input[i] === "array" || typeof input[i] === "object" ) {
                  full_array.push.apply( full_array, [].slice.apply( input[i] ) );
               } else {
                  full_array.push( input[i] );
               }

            }
            return full_array;
         }
      }
   });

   Object.defineProperties(Function.prototype, {

      parent : {
         value : function () {
         }
      }

   });

   return jsW;
}( jsW || {} ));