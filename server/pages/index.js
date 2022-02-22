"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/HeaderItem.js

function HeaderItem({ Icon , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center cursor-pointer w-12 sm:w-20 group hover:text-white ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "h-8 mb-1 group-hover:animate-bounce"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "opacity-0 group-hover:opacity-100 tracling-widest ",
                children: title
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "flex flex-col sm:flex-row m-5 justify-between items-center h-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-grow justify-evenly max-w-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "HOME",
                        Icon: outline_namespaceObject.HomeIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "TRENDING",
                        Icon: outline_namespaceObject.LightningBoltIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "VERIFIED",
                        Icon: outline_namespaceObject.BadgeCheckIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "COLLECTIONS",
                        Icon: outline_namespaceObject.CollectionIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "SEARCH",
                        Icon: outline_namespaceObject.SearchIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "ACCOUNT",
                        Icon: outline_namespaceObject.UserIcon
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                className: "",
                src: "https://links.papareact.com/ua6",
                width: 200,
                height: 90
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./utils/request.js
const API_KEY = process.env.API_KEY;
/* harmony default export */ const utils_request = ({
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie/week?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: "TV Movie",
        url: `/discover/movie/week?api_key=${API_KEY}&with_genres=10770`
    }
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Nav.js



function Nav() {
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide",
                children: Object.entries(utils_request).map(([key, { title , url  }])=>/*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        onClick: ()=>router.push(`/?genre=${key}`)
                        ,
                        className: "cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500",
                        children: title
                    }, key)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Thumbnail.js



function Thumbnail({ result  }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-2 group cursor-pointer transition duration-200 ease-in transfrom sm:hover:scale-105 hover:z-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                layout: "responsive",
                src: `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`,
                height: 1080,
                width: 1920
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "truncate max-w-md",
                        children: result.overview
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
                        children: result.title || result.original_name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center opacity-0 group-hover:opacity-100",
                        children: [
                            result.media_type && `${result.media_type} `,
                            " ",
                            result.release_date || result.first_air_date,
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ThumbUpIcon, {
                                className: "h-5 mx-2"
                            }),
                            " ",
                            result.vote_count
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Results.js


function Results({ results  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3",
        children: results.map((result)=>/*#__PURE__*/ jsx_runtime_.jsx(Thumbnail, {
                result: result
            }, result.id)
        )
    }));
};

;// CONCATENATED MODULE: ./pages/index.js





function Home({ results  }) {
    console.log(results);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Results, {
                results: results
            })
        ]
    }));
};
async function getServerSideProps(context) {
    var ref;
    const genre = context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3${((ref = utils_request[genre]) === null || ref === void 0 ? void 0 : ref.url) || utils_request.fetchTrending.url}`).then((res)=>res.json()
    );
    return {
        props: {
            results: request.results
        }
    };
}


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(557)));
module.exports = __webpack_exports__;

})();