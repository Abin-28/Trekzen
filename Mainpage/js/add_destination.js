document.addEventListener('DOMContentLoaded', function () {
    var addBusinessBtn = document.getElementById('addBusinessBtn');
    if (addBusinessBtn) {
        var businessNameInput = document.getElementById('businessName');
        var businessTypeSelect = document.getElementById('businessType');
        var businessLocationInput = document.getElementById('location');

        if (businessNameInput && businessTypeSelect && businessLocationInput) {
            // We are on bussiness1.html – submit to Firestore
            addBusinessBtn.addEventListener('click', function () {
                var businessName = businessNameInput.value.trim();
                var businessType = businessTypeSelect.value.trim();
                var location = businessLocationInput.value.trim();

                if (businessName === '' || businessType === '' || location === '') {
                    alert('Please fill out all fields.');
                    return;
                }

                import('/Mainpage/js/user_login.js')
                    .then(module => {
                        var addBusiness = module.addBusiness;
                        addBusiness(businessName, businessType, location);
                    })
                    .catch(error => {
                        console.error('Error importing addBusiness:', error);
                        alert('Error adding business. Please try again later.');
                    });
            });
        } else {
            // We are on listing page – navigate to add form
            addBusinessBtn.addEventListener('click', function () {
                window.location.href = '/Mainpage/components/add_destination/add_bussiness/addbussiness.html';
            });
        }
    }

    var addPlaceBtn = document.getElementById('addPlaceBtn');
    if (addPlaceBtn) {
        var placeNameInput = document.getElementById('placeName');
        var placeTypeSelect = document.getElementById('placeType');
        var placeLocationInput = document.getElementById('location');

        if (placeNameInput && placeTypeSelect && placeLocationInput) {
            // We are on addplace.html – submit to Firestore
            addPlaceBtn.addEventListener('click', function () {
                var placeName = placeNameInput.value.trim();
                var placeType = placeTypeSelect.value.trim();
                var location = placeLocationInput.value.trim();

                if (placeName === '' || placeType === '' || location === '') {
                    alert('Please fill out all fields.');
                    return;
                }

                import('/Mainpage/js/user_login.js')
                    .then(module => {
                        var addPlace = module.addPlace;
                        addPlace(placeName, placeType, location);
                    })
                    .catch(error => {
                        console.error('Error importing addPlace:', error);
                        alert('Error adding place. Please try again later.');
                    });
            });
        } else {
            // We are on listing page – navigate to add form
            addPlaceBtn.addEventListener('click', function () {
                window.location.href = '/Mainpage/components/add_destination/add_place/addplace.html';
            });
        }
    }
});