const html = `<html lang="en-US" class="pxajs">
<head>

</head>
<body class="theme-lb main-menu-animated page-dashboard">
<script>let init = [];</script>
<div id="overlay" onclick="closeNav();"></div>
<div id="main-navbar" class="navbar navbar-inverse" role="navigation" style="align-items: center; vertical-align: middle;     flex-wrap: wrap;">
    <script>
    init.push(function () {
        let $data_type = "danger";
        let $data_text = "";
        let interval1Id = setTimeout(function () {
            // Go to the top
            $('html,body').animate({scrollTop: 0}, 500);
            // Wait while page is scrolling
            setTimeout(function () {
                $data_type = "danger";
                //$data_text = "<span><strong>Planned Maintenance:</strong> Please excuse the outage, this platform will be down Monday July 16th, from 9am to 10am EST.</span>";
                $data_text = "<span><strong>Due to the current circumstances with COVID-19, there may be processing and shipping delays to physical prizes.</strong></span>";
                let options = {
                    type: $data_type,
                    namespace: 'pa_page_alerts_default'
                };
                PixelAdmin.plugins.alerts.add($data_text, options);
            }, 400);
        }, 1000);
    });
</script>



            <div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".main-navbar-collapse">
    <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
</button>
<button class="main-menu-toggle " type="button" style="    color: white;
float: left;
padding: 9px 10px;
background-color: transparent;
border: 1px solid transparent;
border-radius: 4px;
font-size: 20px;">
    <i class="navbar-icon fa fa-bars icon"></i>
</button>
<a href="/dashboard" class="navbar-brand" style="    display: inline-block;
padding-top: .3125rem;
padding-bottom: .3125rem;
margin-right: 1rem;
font-size: 1.25rem;
line-height: inherit;
white-space: nowrap;"> <img alt="LGE STARR Incentives" src="/_img/main-navbar-logo-powered.svg"> </a>
</div>
<div class="collapse navbar-collapse main-navbar-collapse" style="    flex-grow: 1;">
        <ul class="nav navbar-nav navbar-right">
                <li>
                        <a href="javascript:;" class="user-menu" onclick="openNav()"><i class="fa fa-bell fa-2x"></i>
                            <span id="badger-count" class="badge badge-primary notification-count">0</span> 
                            <span>Notifications</span></a>
                    </li>                <li>
            <a href="javascript:void(0)" class="help user-menu" onclick="event.preventDefault();"><i class="fa fa-question-circle fa-2x"></i> <span data-i18n="header.HelpText">Help</span></a>
        </li>
        <li>
            <a href="/" class="user-menu"><i class="fa fa-sign-out fa-2x"></i> <span data-i18n="header.LogOffText">Log Off</span></a>
        </li>
            </ul>
    </div>
</div><div id="main-wrapper">
<div class="profile-image-loader" style="
display: none;
width: 100%;
height: 100%;
position: absolute;
background: rgba(0,0,0,0.5);
z-index: 9999;
">
<img style=" width: 200px; height: 200px;    position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);" src="/_img/loader_v2.gif">
</div>

<div id="main-menu" role="navigation" class="main-menu-collapsed">
<div id="main-menu-inner">
    <div class="menu-content top" id="menu-content-head" style="display: flex;">

        <div style="display: flex; justify-content: center; padding: 20px 10px;">

            <form enctype="multipart/form-data" method="post" style=" margin-right: 16px; ">
                <div class="image-wrapper">


                                                        <div class="profile-image" style="background: url('/_img/profile_images/sample_profile_1674836771.jpg') no-repeat; background-size: cover;height: 80px;width: 80px;border-radius: 85px; display: flex" id="profile-image-in-modal">

                                <div style="position: absolute;top: 50%;/* left: 50%; */transform: translateY(-50%);display: flex;width: 100%;justify-content: space-around;">
                                    <div class="select-image">
                                        <input type="file" name="profile_image" class="choose-file">
                                        <div class="change-image-text btn btn-xs btn-primary btn-outline dark" id="profile-change-image"><i class="fa fa-plus"></i></div>
                                    </div>
                                    <input style="display: none" class="btn btn-primary upload-btn vis-hidden" id="profile-image-submit" type="submit" value="Upload Image">
                                    <div class="user-edit-image-wrapper  justify-content-center align-center row">
                                        <div class="user-edit-image">
                                            <a href="javascript:void(0)" data-src="sample_profile_1674836771.jpg" id="profile-image-edit2" class="edit-image-text btn btn-xs btn-primary btn-outline dark" onclick="event.preventDefault();"><i class="fa fa-pencil"></i>                                                    </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                                                    </div>
            </form>
            <div class="text-bg" style="font-size: 15px;max-width: 127px;
white-space: initial;"><span class="text-slim" data-i18n="menu.welcome">Welcome</span>,
                <span class="text-semibold" style="font-size: 15px !important;">NEIL2</span><br><br>
                <div class="btn-group" style="bor">
                    <a href="javascript:void(0)" class="btn btn-xs dark profile" id="profile-edit" onclick="event.preventDefault();" style="width: 100% !important; border: 1px solid #8d8d8d; !important; background: transparent; padding: 4px 7px; line-height: 0; color: #8d8d8d">
                        <i class="fa fa-user"></i> Edit Profile
                    </a>
                                            </div>
            </div>
        </div>
        <div class="text-right">
            <button style="background: transparent; border: none" class="main-menu-toggle" type="button">
                <i class="fa fa-times" style="color: #626569; font-size: 25px"></i>
            </button>
        </div>

    </div>
    <ul class="navigation">
        <li class="main-menu-collapse-button">
            <a class="reload-slider2 main-menu-toggle" type="button">
                <i class="menu-icon navbar-icon fa fa-bars icon"></i>
            </a>
        </li>
        <li class="active">
            <a href="/dashboard"><i class="menu-icon fa fa-dashboard"></i><span class="mm-text" data-i18n="dashboard.dashboard">Dashboard</span>

                
                </a>
        </li>
        <li class="">
            <a class="collapse-recognition-button" data-toggle="collapse" href="#collapse1">
                <i class="menu-icon fa fa-thumbs-up"></i>
                <span class="mm-text">Recognition</span>
                <i style="float: right;" class="fa fa-chevron-right"></i>
            </a>
            <div id="collapse1" class="panel-collapse collapse">
                <ul style="    background: #2f2f2f; padding: 0">
                    <li><a style="padding-left: 40px;" tabindex="-1" href="/recognition"><span class="mm-text">Give Recognition</span></a></li>
                    <li><a style="    padding-left: 40px;" tabindex="-1" href="/recognition_history"><span class="mm-text">Recognition History</span></a></li>
                    <li><a style="    padding-left: 40px;" tabindex="-1" href="/recognition_leaderboard"><span class="mm-text">Recognitions Received Leaderboard</span></a>
                    </li>
                    <li><a style="    padding-left: 40px;" tabindex="-1" href="/recognition_leaderboard_managers"><span class="mm-text">Manager Recognitions Given Leaderboard</span></a>
                    </li>

                </ul>
            </div>
        </li>
            <!--<li class="mm-dropdown">
                <a  href="javascript:void(0);"><i class="menu-icon fa fa-trophy collapse-recognition-button collapsed"></i><span class="mm-text">Campaign Leaderboard</span></a>
                <ul style="padding-left: 0">
                                            </ul>

            </li>-->
        <li>
            <a class="collapse-starr-point-button" data-toggle="collapse" href="#collapse2">
                <i class="menu-icon fa fa-dot-circle-o"></i>
                <span class="mm-text">STARR Points</span>
                <i style="float: right;" class="fa fa-chevron-right"></i>
            </a>
            <div id="collapse2" class="panel-collapse collapse">
                <ul style="    background: #2f2f2f; padding: 0">
                    <li>
                        <a style="padding-left: 40px;" href="/points"><i style="    margin-right: 5px;" class="mm-text fa fa-dot-circle-o"></i><span class="mm-text" data-i18n="points.my_points">My STARR Points</span>  <span id="badger-count" class="badge badge-primary" style="background: #e16041 !important;border: 1px solid #e16041 !important; ">340,938</span>                                </a>
                    </li>
                    <li>
                        <a style="padding-left: 40px;" href="/redeem_points"><i style="    margin-right: 5px;" class="mm-text fa fa-dot-circle-o"></i><span class="mm-text" data-i18n="points.my_points">Redeem STARR Points</span>  <span id="badger-count" class="badge badge-primary" style="background: #e16041 !important;border: 1px solid #e16041 !important; ">340,938</span>                                </a>
                    </li>
                    <li>
                        <a style="padding-left: 40px;" href="/cash_out.php"><i style="    margin-right: 5px;" class="mm-text fa fa-dot-circle-o"></i><span class="mm-text" data-i18n="points.my_points">Cash Option</span>  <span id="badger-count" class="badge badge-primary" style="background: #e16041 !important;border: 1px solid #e16041 !important; ">340,938</span>                                </a>
                    </li>
                </ul>
            </div>

        </li>
        <li>
            <a href="/rewards"><i class="menu-icon fa fa-gift"></i><span class="mm-text" data-i18n="rewards.my_rewards">My Rewards</span></a>
        </li>

        
    </ul>
    <!-- / .navigation -->
    <div class="menu-content">
    </div>
</div>
<!-- / #main-menu-inner -->
</div>
<div class="profile_modal_container" style="height: 0;">

<!-- Modal -->
<div id="profile_modal" class="modal fade" tabindex="-1" role="dialog" style="display: none;" data-backdrop="static">
<form class="form-horizontal" id="user_profile_form" novalidate="novalidate">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel2" data-i18n="profile.profile_title">Your Profile</h4>
        </div>
        <div class="modal-body">
            <div class="row">
                <p class="toboritna-container"><input id="toboritna_u1" name="toboritna_u1" type="text" maxlength="10" placeholder="hu man only"></p>
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">First Name*</label>
                        <input type="text" name="user_profile_firstname" id="user_profile_firstname" class="form-control" value="Neil2" required="required" autocomplete="off" pattern="[A-Za-z]{2,30}" maxlength="30" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Last Name*</label>
                        <input type="text" name="user_profile_lastname" id="user_profile_lastname" class="form-control" value="Patel" required="required" autocomplete="off" pattern="[A-Za-z]{2,30}" maxlength="30" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Email Address*</label>
                        <input type="text" name="user_profile_email" id="user_profile_email" class="form-control" value="npatel@dancorsolutions.com" autocomplete="off" required="required" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Phone Number*</label>
                        <input type="text" name="user_profile_phone" id="user_profile_phone" class="form-control" value="6145551111" autocomplete="off" required="required" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Company</label>
                        <input type="text" name="user_profile_company" id="user_profile_company" class="form-control" value="" autocomplete="off">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Address 1*</label>
                        <input type="text" name="user_profile_address1" id="user_profile_address1" class="form-control" value="2041 Riverside Drive" required="required" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Address 2</label>
                        <input type="text" name="user_profile_address2" id="user_profile_address2" class="form-control" value="suite 102">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">City*</label>
                        <input type="text" name="user_profile_city" id="user_profile_city" class="form-control" value="Columbus" required="required" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">State*</label>
                        <input type="text" name="user_profile_state" id="user_profile_state" class="form-control" value="OH" required="required" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Zip*</label>
                        <input type="text" name="user_profile_zip" id="user_profile_zip" class="form-control" value="43221" required="required" aria-required="true">
                    </div>
                </div><!-- col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group no-margin-hr">
                        <label class="control-label">Country*</label>
                        <select name="user_profile_country" id="user_profile_country">
                            <option value="">Please Choose</option>
                            <option value="USA" selected="selected">United States</option>
                        </select>
                    </div>
                </div><!-- col-sm-6 -->
            </div><!-- row -->
            <div class="row">
                <div class="form-group no-margin-hr">
                    <div class="col-sm-12">
                        <label class="col-sm-12 control-label text-left" style="text-align: left;position: relative;left: -3px;">Receive Email Notifications</label>
                        <div class="col-sm-9">
                            <div class="radio">
                                <label>
                                    <input type="radio" name="email_notifications" value="1" id="email_notifications" checked="">
                                    <span>Yes</span>
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" name="email_notifications" value="0" id="email_notifications">
                                    <span>No</span>
                                </label>
                            </div>
                        </div>
                    </div><!-- col-sm-6 -->

                </div>
            </div><!-- row -->

            <div class="row">
                <div class="form-group no-margin-hr">
                    <a style="padding-left: 15px;" href="send_password">Reset Password</a>
                </div>
            </div>


            <div class="panel-group" id="accordion-pp">
                <div class="panel">
                    <div class="panel-heading">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-pp" href="#collapseThreeA"> <strong>Privacy Policy: </strong> </a>
                    </div>
                    <div id="collapseThreeA" class="panel-collapse collapse">
                        <div class="panel-body">
                            <p><strong>Privacy Policy: </strong> <a style="text-decoration: underline;" href="/privacy_policy" target="_blank">Please
                                    read Privacy Policy</a>. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-group" id="accordion-t_and_c">
                <div class="panel">
                    <div class="panel-heading">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-t_and_c" href="#collapseThree"> <strong>Terms and
                                Conditions: </strong> </a>
                    </div> <!-- / .panel-heading -->
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <p><strong>Terms of Use: </strong> Welcome to the LG STARR Platform! <a style="text-decoration: underline;" href="/_pdf/TermsandConditions.pdf" target="_blank">Please read the Terms and Conditions</a>. </p>
                        </div> <!-- / .panel-body -->
                    </div> <!-- / .collapse -->
                </div> <!-- / .panel -->
            </div> <!-- / .panel-group -->
            <div class="form-group">
                <div class="col-sm-12">
                    <div class="checkbox text-center">
                        <label>
                            <input type="checkbox" name="user_profile_policy" id="user_profile_policy" class="px" checked="">
                            <span class="lbl" id="terms">I accept the Terms and Conditions</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <!-- / .modal-body -->
        <div class="modal-footer">
            <span class="login_error" id="response_profile_input"></span>
            <button id="user_profile_submit" class="btn btn-default btn-close" type="submit" data-i18n="button.save">
                Save Changes
            </button>
        </div>
    </div> <!-- / .modal-content -->
</div> <!-- / .modal-dialog -->
</form>
</div> <!-- /.modal -->
<!-- / Modal -->
</div>
<script>
init.push(function () {
$(".profile").on('click', function () {
    $('#profile_modal').modal('show');
});
});
</script>

<div id="mySidenav" class="sidenav">
<h2>Notifications</h2>
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
<div class="notification-panel">
<div class="notification-wrapper row">
        <div class="notification col-xs-11">
            <div class="row">
                <div class="notification-text col-xs-11">You have no notifications at this time.</div>
            </div>
        </div>
    </div>
</div>
</div>


<style>
.crop-image-container{
max-height: 450px;
}
</style>
<div class="edit-container" style="height: 0;">
<div id="EditImageModal" tabindex="-1" class="modal fade" role="dialog" data-backdrop="static" style="display:none;">
<div class="modal-dialog">
<!-- Modal content-->
<div class="modal-content  background-grey">
    <div class="modal-header">
            <h4 class="modal-title" style="display: inline-block">Edit Your Profile Image</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
    </div>
    <div class="modal-body">
        <div class="container" style="width:100%; height: 100%;">
            <div class="row justify-content-center align-items-center text-center register-form">
                <div class="col-md-12" style="padding-bottom: 10px;">
                    <h2 style="margin-bottom: 0">Edit Your Image below!</h2>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-12">
                    <p>You can use the tools below to edit your image. Once ready to go, click the save button below.</p>
                </div>
                <div class="col-md-12"> 
                    <button class="btn btn-primary" id="profile-rotate-image">Rotate</button> <button id="profile-save-btn" class="btn btn-primary save-image">Save</button>
                    <p><sub style="margin-top: 3px">Tip: Drag the blue corners to resize.</sub></p>
                </div>
               
            </div>
            <div class="col-md-11 crop-image-container" style="margin:1px auto;max-width: 600px;text-align: center;">
                <img style="max-width: 100%;" src="" id="edit-image-tag">
                
            </div>
        </div>
    </div>
</div>

</div>
</div>
</div>
<script>
init.push(function () {
$("#profile-image-edit2").on("click", function () {
    $("#EditImageModal").modal("show");
});
});
</script>    
<div id="content-wrapper"><div id="pa-page-alerts-box"><div class="alert alert-page pa_page_alerts_default alert-danger" data-animate="true" style=""><button type="button" class="close">×</button><span><strong>Due to the current circumstances with COVID-19, there may be processing and shipping delays to physical prizes.</strong></span></div></div>
<ul class="breadcrumb breadcrumb-page">
<li><a href="dashboard" data-i18n="breadcrumb.home">Home</a></li>
<li class="active"><a href="dashboard" data-i18n="dashboard.dashboard">Dashboard</a></li>                                    

</ul>    <div class="page-header row">
<h1 class="col-xs-12 text-center text-left-sm">
<i class="fa fa-dashboard page-header-icon"></i>&nbsp;&nbsp;<span data-i18n="dashboard.dashboard">Dashboard</span>                                                                                                                    </h1>
</div>        <!--        -->
<div class="row" style="padding: 0 15px; margin-bottom: 20px">
<div class="col-md-12" style="width: 100%">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
                                <div style="border: 2px solid #888A8D;" class="item active banners">
                                                    <div class="row" style="display: flex; margin: 0">
                            <div class="banner welcome-banner-3" style="">
                                                                            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8"><img class="image-1" src="./_img/banners/welcome_banner_fg_v3_final.png" alt=""></div>
                                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"><img class="image-2" src="./_img/banners/welcome_cta_fg_v3_final.png" alt=""></div>
                                                                    </div>
                        </div>
                                            </div>
                        </div>
</div>
</div>
</div>

<div class="row" style="padding: 0 15px; display: flex; flex-wrap: wrap">
<div class="col-md-6 col-lg-6">
    

<div class="col-md-12 col-lg-12 give-recognition" style="padding: 0">
<div class="panel widget-tables">
    <div class="panel-heading">
        <span class="panel-title">Give Recognition</span>
    </div>
    <div class="panel-body">
        <div class="row">

            <div class="tab-content tab-content-bordered">
                <div class="stat-panel recognition" onclick="location.href='/recognition'">
                    <div class="stat-row">
                        <div class="stat-cell bg-info no-padding text-center text-lg">
                                                                <div class="wrapper" id="given-wrapper"><span class="text">Remaining STARR Points</span> <span class="number"> 500</span></div>
                                                            </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-cell bg-info no-padding text-center text-lg">
                            <i class="fa fa-thumbs-up page-header-icon"></i>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-cell stat-cell bordered no-border-t text-center text-md">


                            
                                <p>You have until
                                    <strong>02/26/2023</strong>
                                    to use these STARR points</p>

                                                                    <a class="btn btn-primary btn-sm" href="/recognition">Give Recognition</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!--<br clear="all" />-->


    
<div class="col-md-12 col-lg-12 redeem-points" style="padding-left: 0; padding-right: 0">
<div class="panel widget-tables">
    <div class="panel-heading">
        <span class="panel-title">Redeem STARR Points</span>
        <span class="label label-primary">
            &nbsp;340,938 Points</span>
    </div>
    <div class="panel-body">
        <div class="row">

            <div>
                <a href="redeem_points" class="stat-panel">
                    <div class="stat-row">
                        <div class="stat-cell bg-info no-padding text-center text-lg">
                            <i class="fa fa-dot-circle-o page-header-icon"></i>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-cell bordered no-border-t text-center text-md">
                                                                <input type="button" class="btn btn-primary btn-sm" value="Redeem Points">
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</div>            
<div class="col-md-12 col-lg-12 redeem_codes" style="padding-right: 0; padding-left: 0">
<!--<div class="unclickable">
<div class="block">
    <h3>Codes will be available on Wednesday Nov 30</h3>
</div>
</div>-->
<form id="dashboard_form_code" class="panel form-horizontal" style="margin-bottom: 0" novalidate="novalidate">
<div class="panel-heading">
    <span class="panel-title" data-i18n="codes.redeem_codes">REDEEM CODES</span>
</div>
<div class="panel-body">

    <div class="row">
        <p class="toboritna-container"><input id="toboritna_d1" name="toboritna_d1" type="text" maxlength="10" placeholder="hu man only"></p>
        <div>
            <!-- Contest Panel -->
            <a class="stat-panel ">
                <div class="stat-row">
                    <div class="stat-cell bg-info no-padding text-center text-lg">
                        <i class="fa fa-barcode" aria-hidden="true"></i>
                    </div>
                </div>
                <!-- /.stat-row -->
                <div class="stat-row">
                    <div class="stat-cell bordered no-border-t text-center text-md">
                        <input type="text" name="code_input" id="code_input" class="form-control input-lg form-group-margin" placeholder="Please Enter Your Code" data-i18n="[placeholder]placeholder.code_id" required="required" autocomplete="off" pattern="[0-9A-Z]{4,11}" maxlength="11" aria-required="true">
                        <span class="login_error" id="response_code_input"></span>
                        <input name="submit_code_input" type="submit" value="Redeem Code" class="btn btn-primary btn-sm">
                    </div>
                </div>
                </a><!-- /.stat-row -->
        </div>
    </div>
</div>
</form>
</div>        </div>
<div class="col-md-6 col-lg-6 ">
    <div class="panel form-horizontal recent-recognitions" style="border: 1px solid #e4e4e4; height: 100%;     overflow: hidden;">
        <div class="panel-heading" style="border: 1px solid #e6e6e6;">
            <span class="panel-title">Recent Recognitions</span>

        </div>
        <div class="panel-body" style=" background: transparent; display: flex; flex-flow: column; height: 100%;">
            <div id="recent-recognitions-container" class="row" style="overflow: scroll; height: 400px; border: 1px solid #e3e3e3; background: transparent; flex: 1 0 auto;">
                        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Sylvia Seo</strong> was recognized by Kyuho Ahn for demonstrating:
                                            <span class="date-created" style="float: right">6 minutes ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Very thank you for supporting me in doing our task "</p>
                                            <p><a href="javascript:;" id="22812" class="like-recognition unliked">Like</a> <span class="like-counter" id="22812_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Myungjun Song</strong> was recognized by Jangkun Oh for demonstrating:
                                            <span class="date-created" style="float: right">1 hour ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"Thanks for your hard work to support major issues. Great Job ~ !!"</p>
                                            <p><a href="javascript:;" id="22811" class="like-recognition unliked">Like</a> <span class="like-counter" id="22811_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Taehoon Kim</strong> was recognized by Marcie Chambers for demonstrating:
                                            <span class="date-created" style="float: right">1 hour ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Thank you for your support in taking on the additional workload of RA reporting!"</p>
                                            <p><a href="javascript:;" id="22810" class="like-recognition unliked">Like</a> <span class="like-counter" id="22810_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/profile_images/Whittakerrobyn_1570555900_1581021419.jpg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Robyn DeLuca</strong> was recognized by Suzanne Iacono for demonstrating:
                                            <span class="date-created" style="float: right">2 hours ago</span>
                                            </span>
                                            <span style="background: #E16041;" class="tag customer_focus">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="itest2-lg-handshake-01"></span>&nbsp;<span class="recognition-name">Customer Focus&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="New for Employee Appreciation Month!" class="fa fa-question-circle" data-original-title="New for Employee Appreciation Month!"></i></span>
                                            </span>
                                            <p>"Thank you for your help recently with my benefits- you made it all easier!  "</p>
                                            <p><a href="javascript:;" id="22809" class="like-recognition unliked">Like</a> <span class="like-counter" id="22809_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Malgorzata Fryc</strong> was recognized by Suzanne Iacono for demonstrating:
                                            <span class="date-created" style="float: right">2 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Fabulous job at our job fair!  You are amazing! "</p>
                                            <p><a href="javascript:;" id="22808" class="like-recognition unliked">Like</a> <span class="like-counter" id="22808_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Gloria Bond</strong> was recognized by Suzanne Iacono for demonstrating:
                                            <span class="date-created" style="float: right">2 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Incredible job representing LG at the Rutgers!  "</p>
                                            <p><a href="javascript:;" id="22807" class="like-recognition unliked">Like</a> <span class="like-counter" id="22807_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Keun Seung (David) Ryu</strong> was recognized by Suzanne Iacono for demonstrating:
                                            <span class="date-created" style="float: right">2 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Thank you for representing LG at our recent college job fairs!  You rocked it! "</p>
                                            <p><a href="javascript:;" id="22806" class="like-recognition unliked">Like</a> <span class="like-counter" id="22806_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Yujin Choi</strong> was recognized by Kyuhwan Yeon for demonstrating:
                                            <span class="date-created" style="float: right">3 hours ago</span>
                                            </span>
                                            <span style="background: #E16041;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-gears"></span>&nbsp;<span class="recognition-name">Innovation&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are creative problem solvers that strive to develop new solutions that transform current ways of thinking by taking risks and challenging status quo." class="fa fa-question-circle" data-original-title="We are creative problem solvers that strive to develop new solutions that transform current ways of thinking by taking risks and challenging status quo."></i></span>
                                            </span>
                                            <p>"Awesome"</p>
                                            <p><a href="javascript:;" id="22805" class="like-recognition unliked">Like</a> <span class="like-counter" id="22805_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Zachary Graves</strong> was recognized by Paul Husar for demonstrating:
                                            <span class="date-created" style="float: right">3 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"Zac, THANK YOU for your tireless efforts to support our team and customers!
"</p>
                                            <p><a href="javascript:;" id="22804" class="like-recognition unliked">Like</a> <span class="like-counter" id="22804_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Kasey Barber</strong> was recognized by Laura Horn for demonstrating:
                                            <span class="date-created" style="float: right">3 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag digital_transformation">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="itest2-lg-computer-01"></span>&nbsp;<span class="recognition-name">Digital Transformation&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="New for Employee Appreciation Month!" class="fa fa-question-circle" data-original-title="New for Employee Appreciation Month!"></i></span>
                                            </span>
                                            <p>"Nice job Kasey on working with THD for the belly band analysis! "</p>
                                            <p><a href="javascript:;" id="22803" class="like-recognition unliked">Like</a> <span class="like-counter" id="22803_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Kasey Barber</strong> was recognized by Laura Horn for demonstrating:
                                            <span class="date-created" style="float: right">3 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag digital_transformation">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="itest2-lg-computer-01"></span>&nbsp;<span class="recognition-name">Digital Transformation&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="New for Employee Appreciation Month!" class="fa fa-question-circle" data-original-title="New for Employee Appreciation Month!"></i></span>
                                            </span>
                                            <p>"Nice job Kasey on working with THD for the belly band analysis!"</p>
                                            <p><a href="javascript:;" id="22802" class="like-recognition unliked">Like</a> <span class="like-counter" id="22802_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Erik Weddle</strong> was recognized by Clark Lalliss for demonstrating:
                                            <span class="date-created" style="float: right">14 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"You are doing a great job with your work!!"</p>
                                            <p><a href="javascript:;" id="22801" class="like-recognition unliked">Like</a> <span class="like-counter" id="22801_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Haeshil Choi</strong> was recognized by Jay-Hoon Lee for demonstrating:
                                            <span class="date-created" style="float: right">16 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Thank you for your contribution"</p>
                                            <p><a href="javascript:;" id="22800" class="like-recognition unliked">Like</a> <span class="like-counter" id="22800_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Timothy Shim</strong> was recognized by Hongsuk Song for demonstrating:
                                            <span class="date-created" style="float: right">16 hours ago</span>
                                            </span>
                                            <span style="background: #F1AA55;" class="tag flawless_execution">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-people"></span>&nbsp;<span class="recognition-name">Collaboration&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We work together, across businesses and functions, to determine and achieve a common goal through open communication, sharing ideas, and promoting a &quot;we over me&quot; mentality." class="fa fa-question-circle" data-original-title="We work together, across businesses and functions, to determine and achieve a common goal through open communication, sharing ideas, and promoting a &quot;we over me&quot; mentality."></i></span>
                                            </span>
                                            <p>"Thank you for your support!"</p>
                                            <p><a href="javascript:;" id="22799" class="like-recognition unliked">Like</a> <span class="like-counter" id="22799_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Nichole Robichaud</strong> was recognized by Jae Bae for demonstrating:
                                            <span class="date-created" style="float: right">17 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"TCC Agent Incentive (5th place)"</p>
                                            <p><a href="javascript:;" id="22798" class="like-recognition unliked">Like</a> <span class="like-counter" id="22798_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Ronald Pemberton</strong> was recognized by Jae Bae for demonstrating:
                                            <span class="date-created" style="float: right">17 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"TCC Agent Incentive (4th place)"</p>
                                            <p><a href="javascript:;" id="22797" class="like-recognition unliked">Like</a> <span class="like-counter" id="22797_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Mark Weber</strong> was recognized by Jae Bae for demonstrating:
                                            <span class="date-created" style="float: right">17 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"TCC Agent Incentive (6th place)"</p>
                                            <p><a href="javascript:;" id="22796" class="like-recognition unliked">Like</a> <span class="like-counter" id="22796_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Tony Bafford</strong> was recognized by Jae Bae for demonstrating:
                                            <span class="date-created" style="float: right">17 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"TCC Agent Incentive (9th place)"</p>
                                            <p><a href="javascript:;" id="22795" class="like-recognition unliked">Like</a> <span class="like-counter" id="22795_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Scott Combs</strong> was recognized by Jae Bae for demonstrating:
                                            <span class="date-created" style="float: right">17 hours ago</span>
                                            </span>
                                            <span style="background: #6D6E71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-suitcase"></span>&nbsp;<span class="recognition-name">Professionalism&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride." class="fa fa-question-circle" data-original-title="We embrace a diverse workforce and hold ourselves and each other to the highest level of respect, integrity, and pride."></i></span>
                                            </span>
                                            <p>"TCC Agent Incentive (3rd place)"</p>
                                            <p><a href="javascript:;" id="22794" class="like-recognition unliked">Like</a> <span class="like-counter" id="22794_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Ryan Martin</strong> was recognized by Michael Pridgen for demonstrating:
                                            <span class="date-created" style="float: right">17 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Appreciate that you have stayed the course with UPS/SCS, I do believe they will compete with FXFE. Good Job."</p>
                                            <p><a href="javascript:;" id="22793" class="like-recognition unliked">Like</a> <span class="like-counter" id="22793_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Hana Kim</strong> was recognized by Eric Dickerson for demonstrating:
                                            <span class="date-created" style="float: right">18 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"" Hana has been a tremendous help supporting the CAC Airsolutions team. Her continual support and drive to assist has been greatly appreciated." Keep up all of the great work. "</p>
                                            <p><a href="javascript:;" id="22792" class="like-recognition unliked">Like</a> <span class="like-counter" id="22792_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Ui Jin Kim</strong> was recognized by Jerry Edwards for demonstrating:
                                            <span class="date-created" style="float: right">18 hours ago</span>
                                            </span>
                                            <span style="background: #E16041;" class="tag customer_focus">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="itest2-lg-handshake-01"></span>&nbsp;<span class="recognition-name">Customer Focus&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="New for Employee Appreciation Month!" class="fa fa-question-circle" data-original-title="New for Employee Appreciation Month!"></i></span>
                                            </span>
                                            <p>"Ui Jin is currently going the extra mile to support our customer!"</p>
                                            <p><a href="javascript:;" id="22791" class="like-recognition unliked">Like</a> <span class="like-counter" id="22791_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;1</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Thomas Hollinger</strong> was recognized by Justin Campbell for demonstrating:
                                            <span class="date-created" style="float: right">19 hours ago</span>
                                            </span>
                                            <span style="background: #F1AA55;" class="tag flawless_execution">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-people"></span>&nbsp;<span class="recognition-name">Collaboration&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We work together, across businesses and functions, to determine and achieve a common goal through open communication, sharing ideas, and promoting a &quot;we over me&quot; mentality." class="fa fa-question-circle" data-original-title="We work together, across businesses and functions, to determine and achieve a common goal through open communication, sharing ideas, and promoting a &quot;we over me&quot; mentality."></i></span>
                                            </span>
                                            <p>"Great work this past week with the Delightful Service Task! Keep up the good work!"</p>
                                            <p><a href="javascript:;" id="22790" class="like-recognition unliked">Like</a> <span class="like-counter" id="22790_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Randy Jun Jun Lauricio</strong> was recognized by Donald Mooney for demonstrating:
                                            <span class="date-created" style="float: right">19 hours ago</span>
                                            </span>
                                            <span style="background: #E16041;" class="tag customer_focus">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="itest2-lg-handshake-01"></span>&nbsp;<span class="recognition-name">Customer Focus&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="New for Employee Appreciation Month!" class="fa fa-question-circle" data-original-title="New for Employee Appreciation Month!"></i></span>
                                            </span>
                                            <p>"Thank you for the continued support here in the Houston MSA! Your willingness to be flexible has significantly reduced LG customer wait times and increased overall satisfaction. Outstanding work!"</p>
                                            <p><a href="javascript:;" id="22789" class="like-recognition unliked">Like</a> <span class="like-counter" id="22789_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/profile_images/Picture 1 1_1584394206_1584394216_1584394307.jpg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Chanyang Choi</strong> was recognized by Tae Ho Kim for demonstrating:
                                            <span class="date-created" style="float: right">19 hours ago</span>
                                            </span>
                                            <span style="background: #FA0F71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-drive"></span>&nbsp;<span class="recognition-name">Drive&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We achieve desired results by turning right ideas into actions through relentless perseverance and flawless execution." class="fa fa-question-circle" data-original-title="We achieve desired results by turning right ideas into actions through relentless perseverance and flawless execution."></i></span>
                                            </span>
                                            <p>"Congratulations on earning your DP certification! This is a great accomplishment and a testament to your dedication and hard work. Well done!"</p>
                                            <p><a href="javascript:;" id="22788" class="like-recognition unliked">Like</a> <span class="like-counter" id="22788_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Sungdo Han</strong> was recognized by Tae Ho Kim for demonstrating:
                                            <span class="date-created" style="float: right">19 hours ago</span>
                                            </span>
                                            <span style="background: #FA0F71;" class="tag winning_culture">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-drive"></span>&nbsp;<span class="recognition-name">Drive&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We achieve desired results by turning right ideas into actions through relentless perseverance and flawless execution." class="fa fa-question-circle" data-original-title="We achieve desired results by turning right ideas into actions through relentless perseverance and flawless execution."></i></span>
                                            </span>
                                            <p>"Congratulations on earning your DP certification! This is a great accomplishment and a testament to your dedication and hard work. Well done!"</p>
                                            <p><a href="javascript:;" id="22787" class="like-recognition unliked">Like</a> <span class="like-counter" id="22787_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Justin Park</strong> was recognized by Paul Fiolek for demonstrating:
                                            <span class="date-created" style="float: right">20 hours ago</span>
                                            </span>
                                            <span style="background: #E16041;" class="tag customer_focus">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="itest2-lg-handshake-01"></span>&nbsp;<span class="recognition-name">Customer Focus&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="New for Employee Appreciation Month!" class="fa fa-question-circle" data-original-title="New for Employee Appreciation Month!"></i></span>
                                            </span>
                                            <p>"Justin ... in recognition of the REINVENT word of the week 'Customer' - thank you for all the support you have provided and continue to provide.

Keep up the great work.  You Rock! ... Paul"</p>
                                            <p><a href="javascript:;" id="22786" class="like-recognition unliked">Like</a> <span class="like-counter" id="22786_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Megan Easterbrook</strong> was recognized by Yasmin Soliman for demonstrating:
                                            <span class="date-created" style="float: right">20 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Megan, thank you for coming up with the QR code for the career fairs. Very great idea! Appreciate you taking ownership of that ;-)"</p>
                                            <p><a href="javascript:;" id="22785" class="like-recognition unliked">Like</a> <span class="like-counter" id="22785_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;1</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Robert Stolz</strong> was recognized by Andrew Knedlik for demonstrating:
                                            <span class="date-created" style="float: right">20 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Awesome job identifying suspicious fuel card transactions and saving LG from fraud."</p>
                                            <p><a href="javascript:;" id="22784" class="like-recognition unliked">Like</a> <span class="like-counter" id="22784_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>        <div class="stat-panel">
                        <div class="stat-row">
                            <div class="stat-cell bordered text-center text-md">
                                <div class="row">
                                        <div class="avatar col-xs-1"><img src="/_img/avatar.svg" alt="avatar icon">
                                        </div>
                                        <div class="recent-recognitions-wrapper col-xs-11">
                                            <span style="display: block">&nbsp;&nbsp;<strong>Yoonah Jung</strong> was recognized by Tae Hyun Ju for demonstrating:
                                            <span class="date-created" style="float: right">20 hours ago</span>
                                            </span>
                                            <span style="background: #581D24;" class="tag professionalism">
                                                <span class="recognition-tag"><span style="    vertical-align: middle;" class="icon-trophy"></span> &nbsp;<span class="recognition-name">Ownership&nbsp;</span><i data-toggle="tooltip" data-placement="top" title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. " class="fa fa-question-circle" data-original-title="We are trusted to proactively learn, succeed and fail, and take accountability for our actions. We are empowered to inspire, encourage, and develop others to reach their full potential. "></i></span>
                                            </span>
                                            <p>"Good Job!"</p>
                                            <p><a href="javascript:;" id="22783" class="like-recognition unliked">Like</a> <span class="like-counter" id="22783_like-counter"><i class="fa fa-thumbs-up"></i>&nbsp;0</span></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>                        <div id="loading" style="display:none;">Loading</div>
            </div>
        </div>
        <div class="text-center">
            <a class="btn btn-sm btn-primary text-center" href="/recognition" style="position: relative;top: -10px;">Give Recognition</a>
        </div>
    </div>
</div>



<!--        -->


</div>
</div>

</div>
<!-- / #content-wrapper -->
<!--    <div id="main-menu-bg"></div>-->

<div class="prize_modal_container" style="height: 0;">

<div id="prize_modal_award_preview" class="modal fade animated" tabindex="-1" role="dialog" style="display: none;">
<div class="modal-dialog">
<div class="modal-content" style="overflow-y: auto;min-height: 450px;">

</div> <!-- / .modal-content -->
</div> <!-- / .modal-dialog -->
</div> <!-- /.modal -->



<div id="prize_modal_award" class="modal fade animated tada" tabindex="-1" role="dialog" style="display: none;">
<div class="modal-dialog">
<div class="modal-content" style="overflow-y: auto;">


</div> <!-- / .modal-content -->
</div> <!-- / .modal-dialog -->
</div> <!-- /.modal -->


</div>
<script>
init.push(function () {
$(".prize_modal_container").find('.print-link').on('click', function () {
    $(".prize_modal_container").print({
            stylesheet: "_css/print.css"
        }
    );
});
})
</script>

<div class="survey_modal_container" style="height: 0;">

<div id="survey_modal" class="modal fade animated bounce" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" style="display: none;">
<div class="modal-dialog">
<div class="modal-content" style="overflow-y: auto;min-height: 450px;">


</div> <!-- / .modal-content -->
</div> <!-- / .modal-dialog -->
</div> <!-- /.modal -->


</div>
<script>
init.push(function () {
$(".survey_modal_container").find('.print-link').on('click', function () {
    $(".survey_modal_container").print({
            stylesheet: "_css/print.css"
        }
    );
});
})
</script>


<!-- / #main-wrapper -->
<div class="help_modal_container" style="height: 0;">

<div id="help_modal" class="modal fade in" tabindex="-1" role="dialog" style="display: block; padding-left: 15px;">
<div class="modal-dialog modal-lg" style="
overflow: hidden;">
<div class="modal-content">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title" id="myModalLabel" data-i18n="help.help_title">Help</h4>
    </div>
    <div class="modal-body" style="    max-height: 700px;
overflow: auto;">
        <div class="panel-group" id="accordion-example">

            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion-example" href="#collapseTwentyOne" aria-expanded="true"> <strong>Q: </strong><span>WHAT IS THE PRIVACY POLICY?</span> </a>
                </div>                         <div id="collapseTwentyOne" class="panel-collapse collapse in" aria-expanded="true" style="">
                    <div class="panel-body">
                        <div style="border-style: none; border-width: 1px; border-radius: 0; margin: 0; padding: 0;" data-content-type="text" data-appearance="default" data-element="main">
<p><span style="font-weight: 400;"></span></p>
<p><span style="font-weight: 400;"></span></p>
<p><span style="font-weight: 400;"></span></p>
<p><span style="font-weight: 400;"></span></p>
<p><span style="font-weight: 400;"></span></p>
<p><span style="font-weight: 400;"></span></p>
<h3><strong>Privacy Policy</strong></h3>
<p><span style="font-weight: 400;">Dancor Solutions operates https://lg.dancorincentives.com/</span><span style="font-weight: 400;">. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of https://lg.dancorincentives.com/.</span></p>
<p><span style="font-weight: 400;">We use your Personal Information only for providing and improving our site. By using https://lg.dancorincentives.com/, you agree to the collection and use of information in accordance with this policy. </span></p>
<h4><strong>What personal information do we collect from the people that visit our website?</strong></h4>
<p><span style="font-weight: 400;">When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address or other details so that we can provide our services to you.</span></p>
<h4><strong>When do we collect information?</strong></h4>
<p><span style="font-weight: 400;">We collect information from you when you register on our site, place an order, fill out a form or enter information on our site.</span></p>
<h4><strong>How do we use your information?</strong></h4>
<p><span style="font-weight: 400;">We may use such information in the following ways:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">To personalize your experience on our site and to allow us to deliver the type of content and product offerings in which you are most interested.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">To improve our website in order to better serve you.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">To allow us to better service you in responding to your customer service requests.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">To administer a contest, promotion, survey or other site feature.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">To quickly process your transactions.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">To send periodic emails regarding your order or other products and services.</span></li>
</ul>
<h4><strong>How do we protect the information we receive?</strong></h4>
<p><span style="font-weight: 400;">Our site is reviewed on a regular basis for security vulnerabilities in order to make your visit to our site as safe as possible.</span></p>
<p><span style="font-weight: 400;">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. </span></p>
<h4><strong>Do we use "cookies"?</strong></h4>
<p><span style="font-weight: 400;">Yes. Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</span></p>
<p><span style="font-weight: 400;">Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site. </span></p>
<p><span style="font-weight: 400;">We use cookies to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Help remember and process the items in the shopping cart.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Understand and save user's preferences for future visits.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third party services that track this information on our behalf.</span></li>
</ul>
<h4><strong>California Consumer Privacy Act</strong></h4>
<p>If you are a California resident, the information below also applies to you. Certain terms used in this section have the meanings given to them in the California Consumer Privacy Act of 2018 (“CCPA”).</p>
<p><span style="text-decoration: underline;">Categories of Personal Information Dancor Solutions has collected from or about its Guests in the preceding 12 months</span></p>
<ul>
<li>Identifiers (e.g. name, mailing address, email address, phone number)</li>
<li>Commercial information (e.g. products or services purchased, purchase history)</li>
<li>Internet or other electronic network activity (e.g. browse or search history)</li>
<li>Geolocation data (e.g. latitude or longitude)</li>
<li>Inferences drawn from any of the above (e.g. preferences or characteristics)</li>
</ul>
<p><span style="text-decoration: underline;">Categories of Sources from which Dancor Solutions has Collected Personal Information about Guests (for more information, see the How is Your Information Collected section of this privacy policy)</span>.</p>
<ul>
<li>Consumer Directly</li>
<li>Advertising Networks (e.g. Google)</li>
<li>Data analytics providers (e.g. data brokers)</li>
<li>Social networks (e.g. Twitter, Facebook)</li>
</ul>
<p><span style="text-decoration: underline;">Business or Commercial purposes for which Dancor Solutions has collected Personal Information about Guests in the preceding 12 months (for more information, see the How is Your Information Used section of this privacy policy)</span>.</p>
<ul>
<li>Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services;</li>
<li>Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance;</li>
<li>Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction;</li>
<li>Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity;</li>
<li>Debugging to identify and repair errors that impair existing intended functionality;</li>
<li>Undertaking internal research for technological development and demonstration; and</li>
<li>Undertaking activities to verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us, and to improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us.</li>
</ul>
<p><span style="text-decoration: underline;">Categories of Personal Information Dancor Solutions has sold about Guests in the preceding 12 months</span></p>
<ul>
<li>None</li>
</ul>
<p><span style="text-decoration: underline;">Dancor Solutions does not knowingly sell the Personal Information of Minors Under the age of 16.</span></p>
<p><span style="text-decoration: underline;">Categories of Personal Information Dancor Solutions has Disclosed for a Business Purpose and Categories of Third Parties to whom Personal Information has disclosed for a Business Purpose in the Preceding 12 Months</span></p>
<h4><b>Categories of Personal Information Dancor Solutions has disclosed for a business purpose</b></h4>
<ul>
<li>Identifiers (e.g. name, mailing address, email address, phone number)</li>
<li>Characteristics of protected classifications (e.g. gender, age)</li>
<li>Commercial information (e.g. products or services purchased, purchase history)</li>
<li>Internet or other electronic network activity (e.g. browse or search history)</li>
</ul>
<h4><b>Categories of third parties to whom Personal Information has been disclosed for a business purpose </b></h4>
<ul>
<li>Advertising Networks (e.g. Google)</li>
<li>Customer Service (e.g. faxed image)</li>
<li>Data Analytics Providers (e.g. data brokers)</li>
<li>Legal &amp; Risk (e.g. claims)</li>
<li>Order Fulfillment (e.g. Dancor Solutions Plus Sellers, carrier services)</li>
<li>Technology (e.g. website accessibility)</li>
</ul>
<p><span style="text-decoration: underline;">Non-Discrimination</span></p>
<p>Dancor Solutions will not discriminate against you because you exercise your rights. For example, Dancor Solutions will not deny you goods or services or charge you a different price or rate for goods or services if you make an access, deletion, or do not sell request.</p>
<h4><b>You Have the Following rights under the CCPA –</b></h4>
<ul>
<li>Right to request Dancor Solutions disclose Personal Information, or Categories of Personal Information, it collects, uses, discloses, and sells</li>
<li>Right to request Dancor Solutions delete Personal Information we have collected from you</li>
<li>Right to request Dancor Solutions opt you out of the sale of your Personal Information</li>
</ul>
<h4><b>Process Used to Verify an Access and/or Deletion Request</b></h4>
<ul>
<li>If you have a https://lg.dancorincentives.com/ account:
</li>
<li>If you do not have a https://lg.dancorincentives.com/ account, please email your request to <a href="javascript:location='mailto:\u0068\u0065\u006c\u0070\u0064\u0065\u0073\u006b\u0040\u006c\u0067\u0065\u0073\u0074\u0061\u0072\u0072\u002e\u0063\u006f\u006d';void 0">
        <script type="text/javascript">document.write('\u0068\u0065\u006c\u0070\u0064\u0065\u0073\u006b\u0040\u006c\u0067\u0065\u0073\u0074\u0061\u0072\u0072\u002e\u0063\u006f\u006d')</script>helpdesk@lgestarr.com
    </a>. We will respond within 1 business day with the information we need from you to complete the account and personal data deletion.
</li>
<!--<li>You can request a download of your personal data by logging into your account and going to <strong>Account</strong> and <strong>Privacy Settings</strong>. Then click on Download under the Download Personal Data section</li>
<li>You can request a deletion of your account including all personal data, by going to <strong>Account</strong> and <strong>Privacy Settings</strong>. Then click Submit Request under the Delete Account section.</li>-->
</ul>
<h4><b>How Do You Contact Dancor Solutions?</b></h4>
<h5><b>Mail:</b></h5>
<p>Dancor Solutions<br> 2155 Dublin Road<br> Columbus OH 43228</p>
<h5><b>Phone:</b></h5>
<p><a href="tel://614-340-2155">614-340-2155</a></p>
<h4><strong>Changes To This Privacy Policy</strong></h4>
<p><span style="font-weight: 400;">This Privacy Policy is effective as of </span><span style="font-weight: 400; background-color: #ffffff;">(November 4th, 2021)</span><span style="font-weight: 400;"><span style="background-color: #ffffff;"> </span>and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</span></p>
<p><span style="font-weight: 400;">We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</span></p>
<p><span style="font-weight: 400;">If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website. </span></p>
<p><b>Last update: </b>11/4/2021</p>
</div>
                    </div>                         </div>                     </div> 
            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseTwentyTwo" aria-expanded="false"> <strong>Q: </strong><span>WHAT IS THE LG STARR PROGRAM AND WHY IS IT IMPORTANT?</span> </a>
                </div>                         <div id="collapseTwentyTwo" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            At LG, we believe in celebrating accomplishments that are aligned with company objectives. The <strong style="color: #B54273">LG STARR Program</strong> is a three tiered recognition program that allows employees to recognize each other for demonstrating behaviors that are aligned to our company values and guiding principles to achieve No.1 LG. This new approach to rewards and recognition is intended to spread a culture of appreciation and encourage cross-functional collaboration. </p>
                    </div>                         </div>                     </div> 
            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseTwo" aria-expanded="false"> <strong>Q: </strong><span>WHO IS ELIGIBLE TO PARTICIPATE IN THE STARR PROGRAM?</span> </a>
                </div>                         <div id="collapseTwo" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            There are program rules that govern eligibility for each type of recognition. All active LG ISE and FSE employees are eligible to participate in peer to peer recognition (You’re a STARR!). However, eligibility to give or receive STARR points depends on whether or not you are a people manager, an ISE or FSE employee, and your US Level. </p>
                        <table style="width: 100%; overflow: auto;">
                            <tbody><tr>
                                <th style="background: transparent"></th>
                                <th class="text-center" style="background: #B54273; border: 1px solid; padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: white">
                                        You’re a STARR!
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #B54273; border: 1px solid; padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: white">
                                    STARR Points
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #B54273; border: 1px solid; padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: white">
                                    Stellar Award
                                    </strong>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center" style="background: transparent">
                                </th>
                                <th class="text-center" style="background: #D9D9D9; border: 1px solid;padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: black">
                                    Peer to Peer
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #D9D9D9; border: 1px solid;padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: black">
                                    Manager to Employee
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #D9D9D9; border: 1px solid;padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: black">
                                    Company to Employee
                                    </strong>
                                </th>
                            </tr>
                            <tr>
                                <td class="text-center" style="background: #D9D9D9; border: 1px solid; padding: 5px 10px;">
                                    ELIGIBILITY TO RECEIVE
                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    All ISE and FSE Employees
                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    ISE Employees Level 7 and below are eligible to receive STARR points
                                    <strong>
                                        Level 8+ and FSEs not eligible to receive STARR points
                                    </strong>

                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    ISE Employees Level 7 and below are eligible to receive a Stellar Award
                                    <strong>
                                        Level 8+ and FSEs not eligible to receive a Stellar Award
                                    </strong>

                                </td>
                            </tr>
                            <tr>
                                <td class="text-center" style="background: #D9D9D9; border: 1px solid; padding: 5px 10px;">
                                    ELIGIBILITY TO GIVE
                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    All ISE and FSE Employees
                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    ISE and FSE People Managers
                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    ISE and FSE People Managers Level 6+ are eligible to nominate an ISE employee Level 7 and below
                                </td>
                            </tr>
                        </tbody></table>
                        <p style="color: #B54273; font-size: 12px">
                            “PEOPLE MANAGER” IS DEFINED AS HAVING DIRECT REPORTS IN LG4ME; “LEVEL” IS DEFINED AS YOUR <span style="text-decoration: underline">US LEVEL</span> IN LG4ME </p>
                        <p>
                            Contractors, temporary/outsourced personnel and LG Partners are not eligible for this program. </p>
                    </div>                         </div>                     </div> 
            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseEleven" aria-expanded="false"> <strong>Q: </strong><span>HOW DOES THE STARR PROGRAM WORK?</span> </a>
                </div>                         <div id="collapseEleven" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>The STARR Program is a web based solution that can be accessed anytime and from anywhere. When someone is recognized, the recognition is visible and instant! The program provides us with the opportunity to spread a culture of appreciation by celebrating wins together and giving thanks on a daily basis. </p>
                    </div>                        </div>                     </div>                     <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseFour" aria-expanded="false"> <strong>Q: </strong><span>WHAT ARE THE THREE TYPES OF RECOGNITION?</span> </a>
                </div>                        <div id="collapseFour" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <table style="width: 100%; overflow: auto;">
                            <tbody><tr>
                                <th class="text-center" style="background: #B54273; border: 1px solid; padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: white"> You’re a STARR! </strong>
                                </th>
                                <th class="text-center" style="background: #B54273; border: 1px solid; padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: white">
                                        STARR Points*
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #B54273; border: 1px solid; padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: white">
                                        Stellar Award
                                    </strong>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center" style="background: #D9D9D9; border: 1px solid;padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: black">
                                        Peer to Peer
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #D9D9D9; border: 1px solid;padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: black">
                                        Manager to Employee
                                    </strong>
                                </th>
                                <th class="text-center" style="background: #D9D9D9; border: 1px solid;padding: 5px 10px;     white-space: nowrap;">
                                    <strong style="color: black">
                                        Company to Employee
                                    </strong>
                                </th>
                            </tr>
                            <tr>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    Recognize others for doing something great and for demonstrating one of the core behaviors. Recognition is free and unlimited!
                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    Weekly opportunity for people managers to reward an employee with STARR points! Cross-functional recognition is strongly encouraged.
                                    <span style="display: block; color: #B54273; font-size: 10px">
                                        *INCLUDES STARR POINT CARDS FOR HA/SOLAR FACTORY EMPLOYEES
                                    </span>

                                </td>
                                <td class="text-center" style="border: 1px solid; padding: 5px 10px;">
                                    People managers can nominate employees who go above and beyond and whose contributions to LG’s core business are exceptional.

                                </td>
                            </tr>
                        </tbody></table>
                    </div>                        </div>                    </div>
            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseFive" aria-expanded="false"> <strong>Q: </strong><span>WHAT ARE THE FIVE CORE BEHAVIORS AND WHY ARE THEY IMPORTANT?</span> </a>
                </div>                        <div id="collapseFive" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            All recognition aligns core behaviors that support our company values and guiding principles: </p>
                        <ul style="list-style-type: none">
                            <li>
                                COLLABORATION <span style="color: #B54273;">|</span> INNOVATION <span style="color: #B54273;">|</span> DRIVE <span style="color: #B54273;">|</span> OWNERSHIP <span style="color: #B54273;">|</span> PROFESSIONALISM
                            </li>
                        </ul>
                        <p>
                            It is important to recognize colleagues when their actions exemplify our core behaviors, values and guiding principles. This will motivate others and spread a culture of appreciation. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseSix" aria-expanded="false"> <strong>Q: </strong><span>WHAT ARE STARR POINTS?</span> </a>
                </div>                        <div id="collapseSix" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            The <span style="color: #B54273;">STARR Program </span>is a point based recognition program. People managers can award employees with STARR points for demonstrating one of the five core behaviors. </p>
                        <p>
                            STARR points can be accumulated and redeemed for an item in the online rewards catalog. STARR points have no value until redeemed. As long as you are employed with LG, any STARR points you have received will not expire. </p>
                        <p class="text-center" style="color: #B54273; font-size: 12px">
                            PLEASE NOTE THAT FSES AND EMPLOYEES WHOSE US LEVEL is 8 AND ABOVE ARE NOT ELIGIBLE TO RECEIVE STARR POINTS </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseSeven" aria-expanded="false"> <strong>Q: </strong><span>HOW DO I ACCESS THE PROGRAM?</span> </a>
                </div>                        <div id="collapseSeven" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            You can access the STARR Program by clicking the STARR Program link under the “Rewards and Recognition” section on the LG4Me homepage https://e41.ultipro.com/Login.aspx. You can also access the site directly by visiting <a href="https://lgestarr.com/">https://lgestarr.com</a>. You will need your STARR Program Credentials: </p>
                        <ul style="list-style-type: none">
                            <li>
                                <strong>User ID:</strong> LG4Me Employee Number
                            </li>
                            <li>
                                <strong>PW:</strong> Enter your password
                            </li>
                            <li style="font-size: 12px; color: #B54273">
                                AS A FIRST TIME USER, YOU WILL NEED TO ENTER THE TEMPORARY PASSWORD PROVIDED TO YOU. YOU WILL THEN BE PROMPTED TO RESET YOUR PASSWORD.
                            </li>
                        </ul>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseEight" aria-expanded="false"> <strong>Q: </strong><span>IS THE STARR PROGRAM ACCESSIBLE FROM HOME?</span> </a>
                </div>                        <div id="collapseEight" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Yes! The STARR Program can be accessed anytime and from anywhere! Access the site by either clicking the STARR Program link in LG4Me or by visiting the site directly at <a target="_blank" href="https://lgestarr.com/">https://lgestarr.com</a>. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseNine" aria-expanded="false"> <strong>Q: </strong><span>I AM HAVING ISSUES LOGGING IN, WHAT DO I DO?</span> </a>
                </div>                        <div id="collapseNine" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            If you are having issues logging in, confirm you are using your STARR Program <strong>USER ID</strong> and <strong>PASSWORD</strong> to log in. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseTen" aria-expanded="false"> <strong>Q: </strong><span>CAN I USE MY PREFERRED NAME?</span> </a>
                </div>                        <div id="collapseTen" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            The system will default to your first and last name as listed in LG4Me. You can update your name in the STARR site by clicking “Edit Profile”. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseTwelve" aria-expanded="false"> <strong>Q: </strong><span>I SEE DUPLICATE NAMES, HOW CAN I BE SURE I AM RECOGNIZING THE RIGHT PERSON?</span>
                    </a>
                </div>                        <div id="collapseTwelve" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            If you encounter a duplicate name, please refer to the location (state) next to the
                            name of the person that populates. If you are still unsure, please contact the HR
                            Solutions Center at
                            <!--Place the code below where you want the link to be displayed-->
                                                                <script>document.write('<'+'a'+' '+'h'+'r'+'e'+'f'+'='+"'"+'m'+'a'+'i'+'&'+'#'+'1'+'0'+'8'+';'+'t'+'o'+'&'+'#'+'5'+'8'+';'+'s'+'u'+'p'+'&'+'#'+'1'+'1'+'2'+';'+'o'+'%'+'7'+'2'+'t'+'&'+'#'+'6'+'4'+';'+'L'+'G'+'4'+'%'+'4'+'D'+'e'+'%'+'2'+'E'+'&'+'#'+'7'+'0'+';'+'&'+'#'+'1'+'1'+'4'+';'+'e'+'s'+'h'+'d'+'%'+'6'+'5'+'s'+'k'+'&'+'#'+'3'+'7'+';'+'2'+'E'+'&'+'#'+'9'+'9'+';'+'o'+'m'+"'"+'>'+'s'+'&'+'#'+'1'+'1'+'7'+';'+'p'+'&'+'#'+'1'+'1'+'2'+';'+'o'+'&'+'#'+'1'+'1'+'4'+';'+'&'+'#'+'1'+'1'+'6'+';'+'&'+'#'+'6'+'4'+';'+'L'+'&'+'#'+'7'+'1'+';'+'&'+'#'+'5'+'2'+';'+'&'+'#'+'7'+'7'+';'+'&'+'#'+'1'+'0'+'1'+';'+'&'+'#'+'4'+'6'+';'+'&'+'#'+'7'+'0'+';'+'r'+'&'+'#'+'1'+'0'+'1'+';'+'s'+'&'+'#'+'1'+'0'+'4'+';'+'d'+'e'+'s'+'k'+'&'+'#'+'4'+'6'+';'+'c'+'o'+'m'+'<'+'/'+'a'+'>');</script><a href="mailto:suppo%72t@LG4%4De%2EFreshd%65sk%2Ecom">support@LG4Me.Freshdesk.com</a>
                            for confirmation.
                        </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapseThirteen" aria-expanded="false"> <strong>Q: </strong><span>WHY CAN’T I FIND AN EMPLOYEE TO RECOGNIZE?</span>
                    </a>
                </div>                        <div id="collapseThirteen" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            If you are typing a name of an employee and it does not populate check the following: </p>
                        <ul>
                            <li>
                                Ensure you are capitalizing the first initial of the employee name
                            </li>
                            <li>
                                The employee may go by a “Preferred” or “Legal” name in the system.
                            </li>
                        </ul>
                        <p>
                            If you are still unsure, please contact the HR Solutions Center for confirmation. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse15" aria-expanded="false"> <strong>Q: </strong><span>CAN I SEND SOMEONE MORE THAN ONE RECOGNITION?</span> </a>
                </div>                        <div id="collapse15" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Yes. There are no program limitations for recognition. You can send an employee as much recognition as you wish, as many times as you wish. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse16" aria-expanded="false"> <strong>Q: </strong><span>IS MY MESSAGE TO AN EMPLOYEE VISIBLE?</span> </a>
                </div>                        <div id="collapse16" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Yes! The message that you type in <strong>“Say Something Awesome”</strong> will not only be visible to the employee, but also across the company under “Recent Recognitions” (on the dashboard and recognition pages). </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse17" aria-expanded="false"> <strong>Q: </strong><span>WHEN CAN I REDEEM MY STARR POINTS? DO STARR POINTS EXPIRE?</span> </a>
                </div>                        <div id="collapse17" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Employees who are eligible to receive STARR points can redeem them at any time. STARR points do not expire. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse18" aria-expanded="false"> <strong>Q: </strong><span>ARE THE REWARDS FOR EMPLOYEES GROSSED UP?</span> </a>
                </div>                        <div id="collapse18" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            No. When an employee redeems their STARR points for a reward, it will be considered supplemental wages and treated as such for the purpose of calculating payroll taxes. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse19" aria-expanded="false"> <strong>Q: </strong><span>DO I HAVE TO PAY FOR SHIPPING?</span> </a>
                </div>                        <div id="collapse19" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            No. Any applicable shipping cost is calculated into the point value of an item in the online rewards catalog. Shipping does not apply to E-Gift cards. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse20" aria-expanded="false"> <strong>Q: </strong><span>CAN I REDEEM MY STARR POINTS FOR CASH?</span> </a>
                </div>                        <div id="collapse20" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            No. STARR points can only be redeemed for items in the online rewards catalog. There are several gift card options including Visa gift Cards. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse21" aria-expanded="false"> <strong>Q: </strong><span>WHAT IS A STELLAR AWARD?</span> </a>
                </div>                        <div id="collapse21" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            The Stellar Award replaces the Life’s Good and Impact Awards from the Applause Program. If you are a Level 6+ people manager, you can nominate an employee for a Stellar Award. There are five options to choose from: </p>
                        <ul>
                            <li>
                                Jade: 2,500 STARR points ($25)
                            </li>
                            <li>
                                Quartz: 5,000 STARR points ($50)
                            </li>
                            <li>
                                Bronze: 10,000 STARR points ($100)
                            </li>
                            <li>
                                Ruby: 30,000 STARR points ($300)
                            </li>
                            <li>
                                Silver: 50,000 STARR points ($500)
                            </li>
                            <li>
                                Gold: 100,000 STARR points ($1,000)
                            </li>
                            <li>
                                Platinum: 150,000 STARR points ($1,500)
                            </li>
                            <li>
                                Diamond: 200,000 STARR points ($2,000)
                            </li>

                        </ul>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse22" aria-expanded="false"> <strong>Q: </strong><span>HOW DOES THE STELLAR AWARD PROCESS WORK?</span> </a>
                </div>                        <div id="collapse22" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            The Stellar Award is a nomination process. Once you submit a Stellar Award, your nomination will go to the employee’s HR Business Partner first for review. If approved, the nomination approval path will follow the supervisor hierarchy of the employee (<strong>as determined in LG4Me</strong>). </p>
                        <p>
                            The flow will continue until it reaches a US Level 12 supervisor or the highest level within the employee’s organization. </p>
                        <p>
                            Each approver will receive an email notification notifying them that a Stellar Award requires their review. Once the award is approved, the nominator and employee will receive an email notification. The applicable Stellar Award STARR points will then be deposited into their profile. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse23" aria-expanded="false"> <strong>Q: </strong><span>HOW DO I GIVE A RECOGNITION?</span> </a>
                </div>                        <div id="collapse23" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            The process of recognizing another employee is simple! Follow the instructions below: </p>
                        <ol>
                            <li>
                                Log into the <strong style="color: #B54273">STARR Program</strong> with your STARR Program credentials
                            </li>
                            <li>
                               On the dashboard, click <strong>GIVE RECOGNITION</strong> (this can also be accessed using the left menu under “Recognition”)
                           </li>
                           <li>
                               Type the <strong>NAME</strong> of the employee you would like to recognize (employee’s work state after the name will help identify the correct individual)
                           </li>
                           <li>
                               <strong>SAY SOMETHING AWESOME</strong> by typing a note to the employee that you are recognizing. Be specific about what the employee did to receive a recognition from you (Please note your comments will be visible on the site)
                           </li>
                           <li>
                               Select one <strong>CORE BEHAVIOR</strong> you are attaching to the recognition
                           </li>
                           <li>
                               Select the recognition type:
                               <ul>
                                   <li>
                                       <strong>You’re a STARR</strong> (feature available to all employees)
                                   </li>
                                   <li>
                                       <strong>STARR Points </strong> (dropdown feature only available to people managers)
                                   </li>
                                   <li>
                                       <strong>Stellar Award</strong> (dropdown feature only available to people managers level 6+)
                                   </li>
                               </ul>
                           </li>

                            <li>
                                Click <strong>SEND RECOGNITION</strong> and you are done! The recipient will receive an email notification.
                            </li>

                        </ol>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse24" aria-expanded="false"> <strong>Q: </strong><span>I RECEIVED A STARR POINTS CARD, HOW DO I REDEEM MY POINTS?</span> </a>
                </div>                        <div id="collapse24" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            If you receive a STARR Points Card follow these steps: </p>
                        <ol>
                            <li>
                                Log into the <strong style="color: #B54273;">STARR Program</strong> with your STARR Program credentials
                            </li>
                            <li>
                                On the dashboard, locate the <strong>REDEEM CODES</strong> section
                            </li>
                            <li>
                                Enter the code on the back of your STARR Points Card and click <strong>REDEEM CODE</strong>
                            </li>
                            <li>
                                Your STARR points will be available to redeem for an item in the online rewards catalog
                            </li>

                        </ol>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse25" aria-expanded="false"> <strong>Q: </strong><span>HOW DO I USE THE QR CODE ON THE BACK OF MY STARR POINTS CARD?</span> </a>
                </div>                        <div id="collapse25" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Each STARR Points Card has a QR Code, which will direct you to the STARR Program site using your Smartphone. Depending on your phone model and operating system you might have a QR Code Reader built in. If this <strong>is built</strong> in you can simply open your camera app and position the QR code in your viewfinder. </p>
                        <ol>
                            <li>
                                Open your camera app and position the QR code in your view finder
                            </li>
                            <li>
                                A message will appear on your phone to launch the STARR Program site (<a href="https://lgestarr.com/">https://lgestarr.com</a>)
                            </li>
                            <li>
                                Click the link to visit the STARR Program site
                            </li>
                            <li>
                                Use your STARR Program credentials to log in
                            </li>

                        </ol>
                        <p>
                            If the QR Code reader is <strong style="text-decoration: underline">not built</strong> into your phone, you will need to download a QR Code Reader application using your phone’s app store. Once the app is downloaded, follow steps 1-4 above. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse26" aria-expanded="false"> <strong>Q: </strong><span>HOW DO I REDEEM MY POINTS FOR A REWARD?</span> </a>
                </div>                        <div id="collapse26" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Redeem your STARR points for an item in the online rewards catalog by following these steps: </p>
                        <ol>
                            <li>
                                Log into the <strong style="color: #B54273">STARR Program</strong> with your STARR Program credentials
                            </li>
                            <li>
                                On the dashboard, click <strong>REDEEM STARR POINTS</strong> (this can also be accessed using the left menu under STARR Points)
                            </li>
                            <li>
                                Review the online rewards catalog
                            </li>
                            <li>
                                When you choose an item to redeem, click <strong>VIEW DETAILS</strong>
                            </li>
                            <li>
                                If you have enough STARR points, click <strong>CLAIM</strong> to redeem the item:
                                <ul>
                                    <li>
                                        Physical Items  &amp; Physical Gift Cards will require a shipping address
                                    </li>
                                    <li>
                                        E-Gift Cards will be delivered electronically
                                    </li>
                                </ul>
                            </li>
                            <li>
                                If shipping an item, click <strong>SUBMIT</strong> and wait for your
                            </li>
                            <li>
                                If you would like an e-mail confirmation sent about your redemption, click <strong>SEND EMAIL</strong> and then enter your e-mail address and click <strong>YES</strong>
                            </li>

                        </ol>
                        <p>
                            If the QR Code reader is not built into your phone, you will need to download a QR Code Reader application using your phone’s app store. Once the app is downloaded, follow steps 1-4 above. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse27" aria-expanded="false"> <strong>Q: </strong><span>HOW DO I VIEW A REWARD I HAVE PREVIOUSLY REDEEMED? </span> </a>
                </div>                        <div id="collapse27" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            You can view a reward that you have redeemed previously by following these steps: </p>
                        <ol>
                            <li>
                                After logging into the STARR Program, click on <strong>My Rewards</strong> in the left menu
                            </li>
                            <li>
                                Click on the <strong>View Prize</strong> button to view the prize details
                            </li>
                        </ol>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse28" aria-expanded="false"> <strong>Q: </strong><span>HOW WILL I KNOW IF SOMEONE RECOGNIZED ME?</span> </a>
                </div>                        <div id="collapse28" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            If you have been recognized by someone in the system, you will receive an email from “STARR Program Notification Message <!--Place the code below where you want the link to be displayed-->
                                                                <script>document.write('<'+'a'+' '+'h'+'r'+'e'+'f'+'='+"'"+'m'+'&'+'#'+'9'+'7'+';'+'i'+'l'+'t'+'&'+'#'+'1'+'1'+'1'+';'+'&'+'#'+'5'+'8'+';'+'&'+'#'+'1'+'1'+'0'+';'+'%'+'6'+'F'+'r'+'e'+'p'+'&'+'#'+'3'+'7'+';'+'6'+'C'+'&'+'#'+'1'+'2'+'1'+';'+'&'+'#'+'3'+'7'+';'+'4'+'0'+'l'+'&'+'#'+'1'+'0'+'3'+';'+'&'+'#'+'4'+'6'+';'+'&'+'#'+'1'+'0'+'0'+';'+'%'+'&'+'#'+'5'+'4'+';'+'1'+'&'+'#'+'3'+'7'+';'+'6'+'E'+'c'+'&'+'#'+'1'+'1'+'1'+';'+'r'+'i'+'&'+'#'+'1'+'1'+'0'+';'+'%'+'6'+'3'+'e'+'%'+'6'+'E'+'t'+'i'+'v'+'&'+'#'+'1'+'0'+'1'+';'+'s'+'&'+'#'+'4'+'6'+';'+'%'+'6'+'3'+'o'+'m'+"'"+'>'+'n'+'o'+'r'+'e'+'p'+'&'+'#'+'1'+'0'+'8'+';'+'y'+'&'+'#'+'6'+'4'+';'+'l'+'g'+'&'+'#'+'4'+'6'+';'+'d'+'&'+'#'+'9'+'7'+';'+'n'+'c'+'o'+'r'+'&'+'#'+'1'+'0'+'5'+';'+'&'+'#'+'1'+'1'+'0'+';'+'c'+'e'+'&'+'#'+'1'+'1'+'0'+';'+'t'+'i'+'v'+'e'+'s'+'&'+'#'+'4'+'6'+';'+'c'+'&'+'#'+'1'+'1'+'1'+';'+'m'+'<'+'/'+'a'+'>');</script><a href="mailto:n%6Frep%6Cy%40lg.d%61%6Ecorin%63e%6Etives.%63om">noreply@lg.dancorincentives.com</a>
                            "
                        </p>
                        <p>
                            You can also view the details of your recognition in the STARR Program site by clicking: </p>
                        <ul style="list-style-type: none">
                            <li>
                                <strong>Recognition &gt; Recognition History</strong>
                            </li>
                        </ul>
                        <p>
                            If your recognition included STARR points, these will be automatically deposited into your profile under “STARR Points” in the left menu. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse29" aria-expanded="false"> <strong>Q: </strong><span>WHERE CAN I FIND MY EMPLOYEE ID TO LOG IN?</span> </a>
                </div>                        <div id="collapse29" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            There are two locations you can find your Employee ID: </p>
                        <ol>
                            <li>
                                Can view in LG4Me
                            </li>
                            <li>
                                Your LG4Me pay statement
                            </li>

                        </ol>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse30" aria-expanded="false"> <strong>Q: </strong><span>WHAT HAPPENS IF I LEAVE THE COMPANY OR AM TERMINATED?</span> </a>
                </div>                        <div id="collapse30" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Employees forfeit any remaining STARR points upon termination. It will be the responsibility of the employee to redeem points prior to their last day of employment (if the exit was planned). Where applicable, LG will take into consideration special circumstances.

                        </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse32" aria-expanded="false"> <strong>Q: </strong><span>WHO CAN I CONTACT FOR QUESTIONS?</span>
                    </a>
                </div>                        <div id="collapse32" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            For questions concerning program rules, eligibility, guidelines, rewards and
                            recognition, please contact the HR Solutions Center at 1-844-880-MYLG (6954) or via
                            email at
                            <!--Place the code below where you want the link to be displayed-->
                                                                <script>document.write('<'+'a'+' '+'h'+'r'+'e'+'f'+'='+"'"+'m'+'a'+'i'+'&'+'#'+'1'+'0'+'8'+';'+'t'+'o'+'&'+'#'+'5'+'8'+';'+'s'+'u'+'p'+'&'+'#'+'1'+'1'+'2'+';'+'o'+'%'+'7'+'2'+'t'+'&'+'#'+'6'+'4'+';'+'L'+'G'+'4'+'%'+'4'+'D'+'e'+'%'+'2'+'E'+'&'+'#'+'7'+'0'+';'+'&'+'#'+'1'+'1'+'4'+';'+'e'+'s'+'h'+'d'+'%'+'6'+'5'+'s'+'k'+'&'+'#'+'3'+'7'+';'+'2'+'E'+'&'+'#'+'9'+'9'+';'+'o'+'m'+"'"+'>'+'s'+'&'+'#'+'1'+'1'+'7'+';'+'p'+'&'+'#'+'1'+'1'+'2'+';'+'o'+'&'+'#'+'1'+'1'+'4'+';'+'&'+'#'+'1'+'1'+'6'+';'+'&'+'#'+'6'+'4'+';'+'L'+'&'+'#'+'7'+'1'+';'+'&'+'#'+'5'+'2'+';'+'&'+'#'+'7'+'7'+';'+'&'+'#'+'1'+'0'+'1'+';'+'&'+'#'+'4'+'6'+';'+'&'+'#'+'7'+'0'+';'+'r'+'&'+'#'+'1'+'0'+'1'+';'+'s'+'&'+'#'+'1'+'0'+'4'+';'+'d'+'e'+'s'+'k'+'&'+'#'+'4'+'6'+';'+'c'+'o'+'m'+'<'+'/'+'a'+'>');</script><a href="mailto:suppo%72t@LG4%4De%2EFreshd%65sk%2Ecom">support@LG4Me.Freshdesk.com</a>.
                        </p>
                        <p>
                            For questions concerning the <strong style="color: #B54273;">STARR Program</strong>
                            Platform and technical support, you can contact the STARR Program help desk by email
                            at
                            <!--Place the code below where you want the link to be displayed-->
                                                                <script>document.write('<'+'a'+' '+'h'+'r'+'e'+'f'+'='+"'"+'m'+'&'+'#'+'9'+'7'+';'+'&'+'#'+'1'+'0'+'5'+';'+'l'+'t'+'o'+'&'+'#'+'5'+'8'+';'+'h'+'e'+'l'+'p'+'%'+'6'+'4'+'e'+'%'+'7'+'3'+'k'+'&'+'#'+'6'+'4'+';'+'l'+'g'+'&'+'#'+'3'+'7'+';'+'&'+'#'+'5'+'4'+';'+'5'+'s'+'t'+'a'+'r'+'r'+'&'+'#'+'4'+'6'+';'+'c'+'o'+'m'+"'"+'>'+'&'+'#'+'1'+'0'+'4'+';'+'e'+'l'+'p'+'&'+'#'+'1'+'0'+'0'+';'+'e'+'s'+'k'+'&'+'#'+'6'+'4'+';'+'l'+'g'+'e'+'s'+'&'+'#'+'1'+'1'+'6'+';'+'&'+'#'+'9'+'7'+';'+'&'+'#'+'1'+'1'+'4'+';'+'r'+'&'+'#'+'4'+'6'+';'+'&'+'#'+'9'+'9'+';'+'o'+'m'+'<'+'/'+'a'+'>');</script><a href="mailto:help%64e%73k@lg%65starr.com">helpdesk@lgestarr.com</a>
                        </p>
                        <p>
                            Additional documents relating to the STARR Program will posted on the <strong>LG4Me</strong> homepage under the “Rewards and Recognition” section. </p>
                    </div>                        </div>                    </div>                    <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-example" href="#collapse31" aria-expanded="false"> <strong>Q: </strong><span>WHAT IS THE PREFERRED BROWSER FOR THE STARR PROGRAM SITE?</span> </a>
                </div>                         <div id="collapse31" class="panel-collapse collapse" aria-expanded="false">
                    <div class="panel-body">
                        <p>
                            Google Chrome Browser Version 70 and above. </p>

                    </div>                        </div>                    </div>                </div>            </div>
                <div class="modal-footer">
        <button class="btn btn-default btn-close" data-dismiss="modal" type="button" data-i18n="button.close">Close</button>
    </div>
</div>    </div>     </div></div>
<script>
init.push(function () {
$(".help").on('click', function () {
    $('#help_modal').modal('show');
});
});
</script>

<div class="modal fade" id="session-expire-warning-modal" aria-hidden="true" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;">
<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
        <h4 class="modal-title">Session Expire Warning</h4>
    </div>
    <div class="modal-body">
        <b>Your session will timeout in <span class="jTimeout_Countdown">0</span> seconds! Do you want to
            continue?</b>
    </div>
    <div class="modal-footer">
        <button id="btnOk" type="button" class="btn btn-default" style="padding: 6px 12px; margin-bottom: 0; margin-right:10px;font-size: 14px; font-weight: normal;  ">
            Ok
        </button>
        <button id="btnLogoutNow" type="button" class="btn btn-default" style="padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal;  ">Logout now
        </button>
    </div>
</div>
</div>
</div>
<div class="modal fade in" id="session-expired-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: block;">
<div class="modal-dialog">

</div>
</div>



`

function removetags(html) {
    return html.replace( /(<([^>]+)>)/ig, '')
}

