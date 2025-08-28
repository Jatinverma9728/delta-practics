const express = require('express');
const router = express.Router();
const { listingSchema, reviewSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");


const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};


// home page
router.get(
    "/",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    })
);

//new route - ✅ This MUST come before /listings/:id
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show route - ✅ Placed after /new but before other /:id routes
router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");;
        res.render("listings/show.ejs", { listing });
    })
);


//create route
router.post(
    "/",
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

//edit route
router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    })
);

//update route
router.put(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        res.redirect(`/listings/${id}`);
    })
);

//delete route
router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let deleteListing = await Listing.findByIdAndDelete(id);
        console.log(deleteListing);
        res.redirect("/listings");
    })
);

module.exports = router;