# CUID

Collision-resistant client-side UID generator safe for element IDs and server-side lookups. [![Build Status](https://secure.travis-ci.org/dilvie/cuid.png)](http://travis-ci.org/dilvie/cuid)

.cuid() returns a short random string with some collision-busting measures. Safe to use as HTML element ID's, and unique server-side record lookups.

## Example

ch6sgpt5s5lh1ttmg

### Broken down

** c - h6sgpt5s - 5l - h1 - ttmg **

The groups, in order, are:

* 'c' - identifies this as a cuid, and allows you to use it in html entity ids.
* timestamp
* Browser fingerprint. The first chars are obtained from the user agent string (which is fairly unique), and the supported mimeTypes (which is also fairly unique, except for IE, which always returns 0).
* a count of global variables.
* Math.random().