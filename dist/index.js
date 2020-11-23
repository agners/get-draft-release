module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const core = __webpack_require__(150);
const { GitHub, context } = __webpack_require__(698);

async function run() {
  try {
    // Get authenticated GitHub client (Ocktokit): https://github.com/actions/toolkit/tree/master/packages/github#usage
    const github = new GitHub(process.env.GITHUB_TOKEN);
    console.log(`Lets go`);

    let releases = await context.github.paginate(
      context.github.repos.listReleases.endpoint.merge(
        context.repo({
          per_page: 100,
        })
      )
    )

    console.log(`Got ${releases.length} releases: ${releases}`);

    const draftRelease = releases.find((r) => r.draft)

    if (draftRelease)
      console.log(`Draft release: ${draftRelease.tag_name}`);

    console.log(`Got ${draftRelease.length} releases: ${draftRelease}`);

    console.log(`Got release info: '${releaseId}', '${htmlUrl}', '${uploadUrl}', '${name}', '${draft}', '${prerelease}', '${body}'`);

    // Set the output variables for use by other actions: https://github.com/actions/toolkit/tree/master/packages/core#inputsoutputs
    core.setOutput("id", releaseId.toString());
    core.setOutput("html_url", htmlUrl);
    core.setOutput("upload_url", uploadUrl);
    core.setOutput("tag_name", tag);
    core.setOutput("name", name);
    core.setOutput("body", body);
    core.setOutput("draft", draft);
    core.setOutput("prerelease", prerelease);
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

module.exports = run;



/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const run = __webpack_require__(439);

if (require.main === require.cache[eval('__filename')]) {
  run();
}


/***/ }),

/***/ 150:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 698:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(416);
/******/ })()
;