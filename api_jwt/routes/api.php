<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Documents\DocumentsController;
use App\Http\Controllers\Circumstances\CircumstancesController;
use App\Http\Controllers\Recruitment\RecruitmentController;
use App\Http\Controllers\Organogram\OrganogramController;
use App\Http\Controllers\Setting\SettingController;
use App\Http\Controllers\UnauthenticatedController;
use App\Http\Controllers\Leave\LeaveController;
use App\Http\Controllers\Manufacturer\ManufacturesController;
use App\Http\Controllers\Brands\BrandsController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\StripePaymentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('profile', [AuthController::class, 'profile']);
    Route::post('updateprofile', [AuthController::class, 'updateprofile']);
    Route::post('updatePassword', [AuthController::class, 'changesPassword']);
    Route::get('showProfileData', [AuthController::class, 'showProfileData']);
    Route::post('password/email', [ForgotPasswordController::class, 'sendPasswordResetEmail']);
    Route::post('password/reset', [ResetPasswordController::class, 'updatePassword']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'customer'
], function () {
    Route::post('saveLead', [CustomerController::class, 'saveLead']);
    Route::post('saveCustomer', [CustomerController::class, 'saveCustomer']);
    Route::get('allCustomers', [CustomerController::class, 'allCustomers']);
    Route::get('allleadList', [CustomerController::class, 'allleadList']);
    Route::get('getCustomerRow/{id}', [CustomerController::class, 'checkCustomer']);
    Route::get('getLeadRow/{id}', [CustomerController::class, 'checkLead']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'payment'
], function () {
    // Route::post('saveLead', [CustomerController::class, 'saveLead']);
    Route::post('paypal', [PaypalController::class, 'paypal'])->name('paypal');
    Route::post('storeCartData', [PaypalController::class, 'storeCartData'])->name('success');
    // Route::get('cancel', [PaypalController::class, 'cancel'])->name('cancel');
});

Route::controller(StripePaymentController::class)->group(function () {
    // Route::get('stripe', 'stripe')->name('stripe.index');
    Route::post('stripe/checkout', 'stripeCheckout');
    Route::post('stripe/storeCartData', 'storeCartData');
    Route::get('stripe/checkout/success', 'stripeCheckoutSuccess')->name('stripe.checkout.success');
    Route::get('stripe/sendrandId', 'stripeCheckoutSuccess')->name('stripe.checkout.success');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function () {

    Route::get('setting/', [UserController::class, 'preSetting']);
    Route::get('checkState/{id}', [UserController::class, 'checkStates']);
    Route::get('allUsers', [UserController::class, 'AllUsersList']);
    Route::get('allemployeeType', [UserController::class, 'allemployeeType']);
    Route::get('employeeRow/{id}', [UserController::class, 'employeeRow']);
    Route::get('getEmployeeList', [UserController::class, 'getEmployeeList']);
    Route::post('saveEmployee', [UserController::class, 'saveEmployee']);
    Route::get('getDesignationList', [UserController::class, 'getDesignationList']);
    Route::post('saveDesignation', [UserController::class, 'saveDesignation']);
    Route::get('departmentCheck/{id}', [UserController::class, 'departmentCheck']);
    Route::get('designationCheck/{id}', [UserController::class, 'designationCheck']);
    Route::get('getDepartmentList', [UserController::class, 'getDepartmentList']);
    Route::get('typeofdoucments', [UserController::class, 'typeofdoucments']);
    Route::post('saveDepartment', [UserController::class, 'saveDepartment']);
    Route::post('changePassword', [UserController::class, 'changePassword']);
    Route::post('saveUser', [UserController::class, 'saveUser']);
    Route::post('assignToUser', [UserController::class, 'assignToUser']);
    Route::post('saveRole', [UserController::class, 'saveRole']);
    Route::get('getRoleList', [UserController::class, 'getRoleList']);
    Route::get('roleCheck/{id}', [UserController::class, 'roleCheck']);
    Route::get('getUserRow/{id}', [UserController::class, 'editUserId']);
    Route::get('getCountry', [UserController::class, 'getCountry']);
    Route::get('getTime', [UserController::class, 'getTime']);
    Route::get('inactiveEmployee', [UserController::class, 'inactiveEmployee']);
    Route::post('saveCircumstances', [CircumstancesController::class, 'saveCircumstances']);
    Route::get('getCircumstancesList', [CircumstancesController::class, 'getCircumstancesList']);
    Route::get('circumstancesRow/{id}', [CircumstancesController::class, 'circumstancesRow']);
    Route::get('getEmpType/{id}', [CircumstancesController::class, 'getEmpType']);
    Route::get('chkContractAggData', [CircumstancesController::class, 'chkContractAggData']);
    Route::get('selectOrganisationProfile', [UserController::class, 'selectOrganisationProfile']);
    Route::post('organisationUpdateprofile', [UserController::class, 'organisationUpdateprofile']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'category'
], function () {
    Route::post('save', [CategoryController::class, 'save']);
    Route::post('saveAttribute', [CategoryController::class, 'saveAttribute']);
    Route::post('saveAttributeVal', [CategoryController::class, 'saveAttributeVal']);
    Route::get('getCategoryList', [CategoryController::class, 'allCategory']);

    Route::get('getInacCategoryList', [CategoryController::class, 'allInacCategory']);
    Route::get('categoryRow/{id}', [CategoryController::class, 'findCategoryRow']);
    Route::get('getCategoryListParent', [CategoryController::class, 'getCategoryListParent']);
    Route::get('getSubCategoryChild/{id}', [CategoryController::class, 'getSubCategoryChild']);
    Route::get('attributeRow/{id}', [CategoryController::class, 'attributeRow']);
    Route::get('attributeValRow/{id}', [CategoryController::class, 'attributeValRow']);
    Route::get('attributeValRows/{product_id}/{product_attribute_id}', [CategoryController::class, 'attributeValRows']);
    Route::get('search', [CategoryController::class, 'searchCategory']);
    Route::get('attributes', [CategoryController::class, 'getAttribute']);
    Route::get('attributes-list', [CategoryController::class, 'getAttributeList']);
    Route::get('attributes-val-list', [CategoryController::class, 'getAttributeValList']);
});

Route::group([
    'prefix' => 'order'
], function () {
    //Add to cart 
    Route::post('submitOrder', [OrderController::class, 'submitOrder']);
    Route::get('getOrder', [OrderController::class, 'getOrder']);
    Route::get('allOrders', [OrderController::class, 'allOrders']);
    Route::get('activeTickets', [OrderController::class, 'activeTickets']);
    Route::get('orderDetails/{orderid}', [OrderController::class, 'orderDetails']);
    Route::get('addtowish/{slug}', [OrderController::class, 'addtowish']);
    Route::get('allWishList/', [OrderController::class, 'allWishList']);
    Route::get('removeWishList/{productid}', [OrderController::class, 'removeWishList']);
    Route::get('orderStatus', [OrderController::class, 'orderStatus']);
    Route::get('orderStatusRow/{id}', [OrderController::class, 'orderStatusRow']);
    Route::post('save_order', [OrderController::class, 'save_order']);
    Route::get('allOrdersAdmin', [OrderController::class, 'allOrdersAdmin']);
    Route::get('getOrderhistory/{id}', [OrderController::class, 'getOrderhistory']);
    Route::post('update_order_status', [OrderController::class, 'update_order_status']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'product'
], function () {

    Route::post('save', [ProductController::class, 'save']);
    Route::post('saveProductAttribute', [ProductController::class, 'saveProductAttribute']);
    Route::post('product-update', [ProductController::class, 'productUpdate']);
    Route::post('insertVarientGroup', [ProductController::class, 'insertVarientGroup']);
    Route::post('addeditStock', [ProductController::class, 'addeditStock']);
    Route::get('getProductList', [ProductController::class, 'getProductList']);
    Route::get('getinventoryList', [ProductController::class, 'getinventoryList']);
    Route::get('getTicketList', [ProductController::class, 'getTicketList']);
    Route::get('insertProductAttrAndValues', [ProductController::class, 'insertProductAttrAndValues']);
    Route::get('insertProductVarient', [ProductController::class, 'insertProductVarient']);
    Route::get('deleteValrient', [ProductController::class, 'deleteValrient']);
    Route::get('getAttrHistory/{id}', [ProductController::class, 'getAttrHistory']);
    Route::get('productrow/{id}', [ProductController::class, 'productrow']);
    Route::get('deleteProAttr', [ProductController::class, 'deleteProAttr']);
    Route::get('allsizes', [ProductController::class, 'allsizes']);
    Route::get('additionaIMagesDelete', [ProductController::class, 'additionaIMagesDelete']);
    Route::get('deleteCategory', [ProductController::class, 'deleteCategory']);
    Route::get('getVarientHistory', [ProductController::class, 'getVarientHistory']);
    Route::get('removeProducts/{id}', [ProductController::class, 'removeProducts']);
    Route::get('productsearchAutocomplete', [ProductController::class, 'autocompleteSearch']);
    Route::get('summary-report-tickets', [ProductController::class, 'summaryReportTickets']);
});

Route::group([
    //'middleware' => 'api',
    'prefix' => 'manufacturers'
], function () {
    Route::post('save', [ManufacturesController::class, 'save']);
    Route::get('allmanufacturers', [ManufacturesController::class, 'allmanufacturers']);
    Route::get('manufacturersrow/{id}', [ManufacturesController::class, 'manufacturersrow']);
});

Route::group([
    //'middleware' => 'api',
    'prefix' => 'brands'
], function () {
    Route::post('save', [BrandsController::class, 'save']);
    Route::get('allbrandlist', [BrandsController::class, 'allbrandlist']);
    Route::get('brandrow/{id}', [BrandsController::class, 'brandrow']);
    // Route::get('searchmodels', [BrandsController::class, 'searchmodels']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'project'
], function () {
    Route::post('saveTask', [ProjectController::class, 'saveTask']);
    Route::post('saveProject', [ProjectController::class, 'save']);
    Route::get('allProject', [ProjectController::class, 'allProject']);
    Route::get('geTaskList', [ProjectController::class, 'geTaskList']);
    Route::get('checkProjectId/{id}', [ProjectController::class, 'editId']);
    Route::get('taskRow/{id}', [ProjectController::class, 'editTaskId']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'documents'
], function () {
    Route::post('saveDocuments', [DocumentsController::class, 'saveDocuments']);
    Route::get('getAllDocuments', [DocumentsController::class, 'getAllDocuments']);
    Route::get('documents-row/{id}', [DocumentsController::class, 'editId']);
});
Route::group([
    //'middleware' => 'api',
    'prefix' => 'unauthenticate'
], function () {
    //Add to cart 

    Route::post('verificationCode', [UnauthenticatedController::class, 'verificationCode']);
    Route::post('forgetPassword', [UnauthenticatedController::class, 'resetPassword']);
    Route::get('cart', [CartController::class, 'index']);
    Route::get('getCartData', [CartController::class, 'getCartData']);
    Route::post('addToCart', [CartController::class, 'addToCart']);
    Route::get('searchProductCategory/{category_id}', [UnauthenticatedController::class, 'productCategory']);
    Route::get('sellingFast', [UnauthenticatedController::class, 'sellingFast']);
    Route::get('randomProducts', [UnauthenticatedController::class, 'randomProducts']);
    Route::get('randomProductslimit', [UnauthenticatedController::class, 'randomProductslimit']);
    Route::get('getTickets', [UnauthenticatedController::class, 'getTickets']);
    Route::post('sendmail', [UnauthenticatedController::class, 'sendmail']);
    Route::get('/search-products', [UnauthenticatedController::class, 'search']);
    Route::get('slidersImages', [UnauthenticatedController::class, 'slidersImages']);
    Route::get('topSellingProducts', [UnauthenticatedController::class, 'topSellProducts']);
    Route::get('limitedProducts', [UnauthenticatedController::class, 'limitedProducts']);
    Route::get('filterCategorys', [UnauthenticatedController::class, 'filterCategory']);
    Route::get('getCategoryList', [UnauthenticatedController::class, 'allCategory']);
    Route::get('getsubCategoryList', [UnauthenticatedController::class, 'allsubCategory']);
    Route::get('findCategoryWiseProduct/{slug}', [UnauthenticatedController::class, 'findCategorys']);
    Route::get('getProductrow', [UnauthenticatedController::class, 'getProductrow']);
    Route::get('get-paginated-products', [UnauthenticatedController::class, 'getPaginatedData']);
    Route::get('defaultShowingProduct', [UnauthenticatedController::class, 'defaultShowingProduct']);
    Route::get('productSlug/{slug}', [UnauthenticatedController::class, 'findProductSlug']);
    Route::get('countrys/', [UnauthenticatedController::class, 'getCountrys']);
    Route::get('setting/', [UnauthenticatedController::class, 'preSetting']);

    Route::post('check-coupon/', [UnauthenticatedController::class, 'checkCoupon']);
    //Route::get('defaultShowingMovies', [UnauthenticatedController::class, 'defaultShowingMovies']);

    Route::get('defaultShowingMoviesHome', [UnauthenticatedController::class, 'defaultShowingMoviesHome']);
    Route::get('loadMorePagination', [UnauthenticatedController::class, 'loadMorePagination']);
    Route::get('findCategorys', [UnauthenticatedController::class, 'findCategorys']);

    Route::get('showingMoviesCatWise', [UnauthenticatedController::class, 'showingMoviesCatWise']);
    Route::get('videoPagination', [UnauthenticatedController::class, 'videoPagination']);
    Route::get('paginatedMovies', [UnauthenticatedController::class, 'paginatedMovies']);
    Route::get('catloadMorePagination', [UnauthenticatedController::class, 'loadMorePagination']);
    Route::get('filderProduct', [UnauthenticatedController::class, 'filderProduct']);
    Route::get('autocomplete', [UnauthenticatedController::class, 'autocomplete']);
    Route::get('sliders', [UnauthenticatedController::class, 'slidersImages']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'setting'
], function () {
    //add slider 
    Route::post('insertSlider', [SettingController::class, 'insertSlider']);
    Route::get('slidersImages', [SettingController::class, 'slidersImages']);
    Route::get('sliderrow/{id}', [SettingController::class, 'sliderrow']);
    //emp type
    Route::post('insertEmployeeType', [SettingController::class, 'insertEmployeeType']);
    Route::get('getEmployeeTypeList', [SettingController::class, 'getEmployeeTypeList']);
    Route::get('checkrowEmpleeType/{id}', [SettingController::class, 'checkrowEmpleeType']);
    //pay group
    Route::post('insertPayGroup', [SettingController::class, 'insertPayGroup']);
    Route::get('getPayGroupList', [SettingController::class, 'getPayGroupList']);
    Route::get('checkrowPayGroup/{id}', [SettingController::class, 'checkrowPayGroup']);
    //Annual Pay 
    Route::post('insertAnnualPay', [SettingController::class, 'insertAnnualPay']);
    Route::get('getAnnualPayist', [SettingController::class, 'getAnnualPayist']);
    Route::get('checkrowAnnualPay/{id}', [SettingController::class, 'checkrowAnnualPay']);
    //Bank Master
    Route::post('insertBankMaster', [SettingController::class, 'insertBankMaster']);
    Route::get('getBankMasterlist', [SettingController::class, 'getBankMasterlist']);
    Route::get('checkrowBankMaster/{id}', [SettingController::class, 'checkrowBankMaster']);
    //Bank Short Code 
    Route::post('insertBankCode', [SettingController::class, 'insertBankCode']);
    Route::get('getBankShortCodelist', [SettingController::class, 'getBankShortCodelist']);
    Route::get('checkrowBankShortCode/{id}', [SettingController::class, 'checkrowBankShortCode']);
    //Tax Master
    Route::post('insertTaxMaster', [SettingController::class, 'insertTaxMaster']);
    Route::get('gettxtMastlist', [SettingController::class, 'gettxtMastlist']);
    Route::get('checkrowtxtmaster/{id}', [SettingController::class, 'checkrowtxtmaster']);
    //Payment type
    Route::post('insertPaymentType', [SettingController::class, 'insertPaymentType']);
    Route::get('getPaymentType', [SettingController::class, 'getPaymentType']);
    Route::get('checkrowPaymenttype/{id}', [SettingController::class, 'checkrowPaymenttype']);
    //Wedges pay mode
    Route::post('insertWedges', [SettingController::class, 'insertWedges']);
    Route::get('getWdges', [SettingController::class, 'getWdges']);
    Route::get('checkrowWedges/{id}', [SettingController::class, 'checkrowWedges']);
    //Pay Item List 
    Route::post('insertPayItem', [SettingController::class, 'insertPayItem']);
    Route::get('getPayItemList', [SettingController::class, 'getPayItemList']);
    Route::get('checkPayItemRow/{id}', [SettingController::class, 'checkPayItemRow']);

    //update setting option 
    Route::post('upateSetting', [SettingController::class, 'upateSetting']);
});

