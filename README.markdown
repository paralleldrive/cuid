# CUID

Collision-resistant client-side UID generator safe for element IDs and server-side lookups. [![Build Status](https://secure.travis-ci.org/dilvie/cuid.png)](http://travis-ci.org/dilvie/cuid)

.cuid() returns a short random string with some collision-busting measures. Safe to use as HTML element ID's, and unique server-side record lookups.

## Example

wz5347t5lh1ttmg

### Broken down

** w - z5347t - [5l-h1] - ttmg **

The first char is a random a-z char to make it HTML ID friendly.

The next group is a timestamp.

After that is a fingerprint where the first chars are obtained from the user agent string (which is fairly unique), and the supported mimeTypes (which is also fairly unique, except for IE, which always returns 0).

The final bit of browser fingerprint is a count of global variables (which varies a lot).

The rest of the ID is just a random number.