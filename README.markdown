# CUID

Collision-resistant client-side UID generator safe for element IDs and server-side lookups. [![Build Status](https://secure.travis-ci.org/dilvie/cuid.png)](http://travis-ci.org/dilvie/cuid)

.cuid() returns a short random string with some collision-busting measures. Safe to use as HTML element ID's, and unique server-side record lookups.

## Example

ch72gsb320000udocl363

### Broken down


** c - h72gsb32 - 0000 - udoc - l363 **

The groups, in order, are:

* 'c' - identifies this as a cuid, and allows you to use it in html entity ids. The fixed value helps keep the ids sequential.
* timestamp
* counter - a single process might generate the same random string. The weaker the pseudo-random source, the higher the probability. That problem gets worse as processors get faster. The counter will roll over if the value gets too big.
* Client fingerprint
* Math.random()


## Fingerprints

In browsers, the first chars are obtained from the user agent string (which is fairly unique), and the supported mimeTypes (which is also fairly unique, except for IE, which always returns 0).

In node, the first two chars are extracted from the process.pid. The next two chars are extracted from the hostname.
