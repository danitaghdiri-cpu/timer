// =====================================================
//                 اطلاعات دانش‌آموزان
// =====================================================

const students = [

    {
        name: "علی رضایی",
        nationalCode: "0012345678",
        phone: "09121234567",
        trackingCode: "1001"
    },

    {
        name: "محمد احمدی",
        nationalCode: "0023456789",
        phone: "09131234567",
        trackingCode: "1002"
    },

    {
        name: "امیر حسینی",
        nationalCode: "0034567890",
        phone: "09141234567",
        trackingCode: "1003"
    },

    {
        name: "پارسا کریمی",
        nationalCode: "0045678901",
        phone: "09151234567",
        trackingCode: "1004"
    },

    {
        name: "رضا محمدی",
        nationalCode: "0056789012",
        phone: "09161234567",
        trackingCode: "1005"
    },

    {
        name: "آرین مرادی",
        nationalCode: "0067890123",
        phone: "09171234567",
        trackingCode: "1006"
    },

    {
        name: "سینا اکبری",
        nationalCode: "0078901234",
        phone: "09181234567",
        trackingCode: "1007"
    },

    {
        name: "کیان نادری",
        nationalCode: "0089012345",
        phone: "09191234567",
        trackingCode: "1008"
    },

    {
        name: "علی اکبری",
        nationalCode: "0090123456",
        phone: "09201234567",
        trackingCode: "1009"
    },

    {
        name: "محمدرضا کریمی",
        nationalCode: "0101234567",
        phone: "09211234567",
        trackingCode: "1010"
    }

];


// =====================================================
//                     دانشجویان
// =====================================================

const universityStudents = [

    {
        name: "محمد رضایی",
        major: "مهندسی کامپیوتر",
        studentCode: "2001",
        phone: "09120001111"
    },

    {
        name: "سارا احمدی",
        major: "مهندسی معماری",
        studentCode: "2002",
        phone: "09120002222"
    },

    {
        name: "پارسا حسینی",
        major: "مهندسی برق",
        studentCode: "2003",
        phone: "09120003333"
    },

    {
        name: "نگار کریمی",
        major: "حسابداری",
        studentCode: "2004",
        phone: "09120004444"
    },

    {
        name: "امیر مرادی",
        major: "مدیریت",
        studentCode: "2005",
        phone: "09120005555"
    }

];


// =====================================================
//                      کارمندان
// =====================================================

const employees = [

    {
        name: "رضا محمدی",
        job: "مدیر سیستم",
        employeeCode: "3001",
        phone: "09121111111"
    },

    {
        name: "مریم احمدی",
        job: "مسئول آموزش",
        employeeCode: "3002",
        phone: "09122222222"
    },

    {
        name: "علی کریمی",
        job: "حسابدار",
        employeeCode: "3003",
        phone: "09123333333"
    },

    {
        name: "سارا رضایی",
        job: "منابع انسانی",
        employeeCode: "3004",
        phone: "09124444444"
    },

    {
        name: "امیر حسینی",
        job: "کارشناس فناوری",
        employeeCode: "3005",
        phone: "09125555555"
    }

];


// =====================================================
//                        معلم‌ها
// =====================================================

const teachers = [

    {
        name: "حسین رضایی",
        subject: "ریاضی",
        teacherCode: "4001",
        phone: "09131111111"
    },

    {
        name: "مریم کریمی",
        subject: "ادبیات",
        teacherCode: "4002",
        phone: "09132222222"
    },

    {
        name: "علی احمدی",
        subject: "فیزیک",
        teacherCode: "4003",
        phone: "09133333333"
    },

    {
        name: "سارا حسینی",
        subject: "زبان انگلیسی",
        teacherCode: "4004",
        phone: "09134444444"
    },

    {
        name: "رضا مرادی",
        subject: "شیمی",
        teacherCode: "4005",
        phone: "09135555555"
    }

];


// =====================================================
//                       راننده‌ها
// =====================================================

const drivers = [

    {
        name: "احمد رضایی",
        vehicle: "اتوبوس",
        route: "مسیر ۱",
        driverCode: "5001"
    },

    {
        name: "محمد کریمی",
        vehicle: "مینی‌بوس",
        route: "مسیر ۲",
        driverCode: "5002"
    },

    {
        name: "علی مرادی",
        vehicle: "اتوبوس",
        route: "مسیر ۳",
        driverCode: "5003"
    },

    {
        name: "رضا حسینی",
        vehicle: "ون",
        route: "مسیر ۴",
        driverCode: "5004"
    }

];


// =====================================================
//                    مراکز حقوقی
// =====================================================

const legalCenters = [

    {
        name: "مرکز حقوقی تهران",
        manager: "علی رضایی",
        phone: "02111111111",
        status: "فعال"
    },

    {
        name: "مرکز حقوقی شرق",
        manager: "محمد احمدی",
        phone: "02122222222",
        status: "فعال"
    },

    {
        name: "مرکز حقوقی غرب",
        manager: "رضا کریمی",
        phone: "02133333333",
        status: "در حال بررسی"
    }

];


// =====================================================
//                       سرویس‌ها
// =====================================================

const services = [

    {
        name: "سرویس مدرسه شماره ۱",
        driver: "احمد رضایی",
        capacity: "20 نفر",
        status: "فعال"
    },

    {
        name: "سرویس مدرسه شماره ۲",
        driver: "محمد کریمی",
        capacity: "18 نفر",
        status: "فعال"
    },

    {
        name: "سرویس مدرسه شماره ۳",
        driver: "علی مرادی",
        capacity: "22 نفر",
        status: "غیرفعال"
    }

];


// =====================================================
//                       اطلاعات مالی
// =====================================================

const finance = [

    {
        title: "شهریه دانش‌آموزان",
        amount: "۱۵۰,۰۰۰,۰۰۰ تومان",
        status: "پرداخت شده"
    },

    {
        title: "حقوق کارکنان",
        amount: "۸۰,۰۰۰,۰۰۰ تومان",
        status: "در انتظار"
    },

    {
        title: "هزینه سرویس‌ها",
        amount: "۳۵,۰۰۰,۰۰۰ تومان",
        status: "پرداخت شده"
    }

];


// =====================================================
//                    سرویس پیامکی
// =====================================================

const smsServices = [

    {
        title: "پیامک اطلاع‌رسانی",
        receiver: "دانش‌آموزان",
        count: "1200 پیام",
        status: "ارسال شده"
    },

    {
        title: "پیامک والدین",
        receiver: "والدین",
        count: "850 پیام",
        status: "ارسال شده"
    },

    {
        title: "پیامک یادآوری",
        receiver: "کارمندان",
        count: "120 پیام",
        status: "در انتظار"
    }

];


// =====================================================
//                     محتوای صفحات
// =====================================================

const content = document.getElementById("content");


// =====================================================
//                       هدر
// =====================================================

function createHeader(title, icon) {

    return `

        <div class="content-header">

            <div>

                <span class="small-title">
                    پنل مدیریت
                </span>

                <h2>
                    ${title}
                </h2>

            </div>

            <div class="header-icon">

                <i class="bi ${icon}"></i>

            </div>

        </div>

    `;
}


// =====================================================
//                   جدول دانش‌آموزان
// =====================================================

function showStudents() {

    content.innerHTML = createHeader(
        "مدیریت دانش‌آموزان",
        "bi-person-vcard-fill"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                لیست دانش‌آموزان
            </h3>

            <p>
                در این قسمت اطلاعات دانش‌آموزان سیستم نمایش داده می‌شود.
            </p>

        </div>


        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>نام و نام خانوادگی</th>

                        <th>کد ملی</th>

                        <th>موبایل</th>

                        <th>کد رهگیری</th>

                    </tr>

                </thead>


                <tbody>

                    ${students.map(student => `

                        <tr>

                            <td>
                                ${student.name}
                            </td>

                            <td>
                                ${student.nationalCode}
                            </td>

                            <td>
                                ${student.phone}
                            </td>

                            <td>
                                <span class="badge">
                                    ${student.trackingCode}
                                </span>
                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                    دانشجویان
// =====================================================

function showUniversityStudents() {

    content.innerHTML = createHeader(
        "مدیریت دانشجویان",
        "bi-mortarboard-fill"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                لیست دانشجویان
            </h3>

            <p>
                اطلاعات رشته و مشخصات دانشجویان در این بخش قرار دارد.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>نام</th>
                        <th>رشته تحصیلی</th>
                        <th>شماره دانشجویی</th>
                        <th>موبایل</th>

                    </tr>

                </thead>

                <tbody>

                    ${universityStudents.map(student => `

                        <tr>

                            <td>${student.name}</td>

                            <td>${student.major}</td>

                            <td>${student.studentCode}</td>

                            <td>${student.phone}</td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                       کارمندان
// =====================================================

function showEmployees() {

    content.innerHTML = createHeader(
        "مدیریت کارمندان",
        "bi-people-fill"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                لیست کارمندان
            </h3>

            <p>
                مشخصات و سمت کارکنان مجموعه.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>نام</th>
                        <th>سمت</th>
                        <th>کد کارمندی</th>
                        <th>موبایل</th>

                    </tr>

                </thead>

                <tbody>

                    ${employees.map(employee => `

                        <tr>

                            <td>${employee.name}</td>

                            <td>${employee.job}</td>

                            <td>${employee.employeeCode}</td>

                            <td>${employee.phone}</td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                         معلم‌ها
// =====================================================

function showTeachers() {

    content.innerHTML = createHeader(
        "مدیریت معلم‌ها",
        "bi-person-workspace"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                لیست معلم‌ها
            </h3>

            <p>
                اطلاعات معلم‌ها و درس‌هایی که تدریس می‌کنند.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>نام</th>
                        <th>درس</th>
                        <th>کد معلم</th>
                        <th>موبایل</th>

                    </tr>

                </thead>

                <tbody>

                    ${teachers.map(teacher => `

                        <tr>

                            <td>${teacher.name}</td>

                            <td>${teacher.subject}</td>

                            <td>${teacher.teacherCode}</td>

                            <td>${teacher.phone}</td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                        راننده‌ها
// =====================================================

function showDrivers() {

    content.innerHTML = createHeader(
        "مدیریت راننده‌ها",
        "bi-car-front-fill"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                لیست راننده‌ها
            </h3>

            <p>
                اطلاعات راننده‌ها، وسیله نقلیه و مسیرهای سرویس.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>نام راننده</th>
                        <th>وسیله نقلیه</th>
                        <th>مسیر</th>
                        <th>کد راننده</th>

                    </tr>

                </thead>

                <tbody>

                    ${drivers.map(driver => `

                        <tr>

                            <td>${driver.name}</td>

                            <td>${driver.vehicle}</td>

                            <td>${driver.route}</td>

                            <td>${driver.driverCode}</td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                     مراکز حقوقی
// =====================================================

function showLegal() {

    content.innerHTML = createHeader(
        "مراکز حقوقی",
        "bi-bank2"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                مراکز حقوقی
            </h3>

            <p>
                مدیریت مراکز حقوقی و اطلاعات مسئولین.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>مرکز</th>
                        <th>مدیر</th>
                        <th>تلفن</th>
                        <th>وضعیت</th>

                    </tr>

                </thead>

                <tbody>

                    ${legalCenters.map(center => `

                        <tr>

                            <td>${center.name}</td>

                            <td>${center.manager}</td>

                            <td>${center.phone}</td>

                            <td>
                                <span class="badge">
                                    ${center.status}
                                </span>
                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                        سرویس‌ها
// =====================================================

function showServices() {

    content.innerHTML = createHeader(
        "مدیریت سرویس‌ها",
        "bi-bus-front-fill"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                سرویس‌های مدرسه
            </h3>

            <p>
                مدیریت سرویس‌ها و راننده‌های مربوط به آن‌ها.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>نام سرویس</th>
                        <th>راننده</th>
                        <th>ظرفیت</th>
                        <th>وضعیت</th>

                    </tr>

                </thead>

                <tbody>

                    ${services.map(service => `

                        <tr>

                            <td>${service.name}</td>

                            <td>${service.driver}</td>

                            <td>${service.capacity}</td>

                            <td>
                                <span class="badge">
                                    ${service.status}
                                </span>
                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                         مالی
// =====================================================

function showFinance() {

    content.innerHTML = createHeader(
        "مدیریت مالی",
        "bi-wallet2"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                گزارش مالی
            </h3>

            <p>
                اطلاعات پرداخت‌ها و هزینه‌های مجموعه.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>عنوان</th>
                        <th>مبلغ</th>
                        <th>وضعیت</th>

                    </tr>

                </thead>

                <tbody>

                    ${finance.map(item => `

                        <tr>

                            <td>${item.title}</td>

                            <td>${item.amount}</td>

                            <td>
                                <span class="badge">
                                    ${item.status}
                                </span>
                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                    سرویس پیامکی
// =====================================================

function showSMS() {

    content.innerHTML = createHeader(
        "سرویس پیامکی",
        "bi-chat-square-text-fill"
    );

    content.innerHTML += `

        <div class="info-card">

            <h3>
                مدیریت پیامک‌ها
            </h3>

            <p>
                گزارش پیامک‌های ارسال شده و در انتظار ارسال.
            </p>

        </div>

        <div class="table-container">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>عنوان</th>
                        <th>گیرنده</th>
                        <th>تعداد</th>
                        <th>وضعیت</th>

                    </tr>

                </thead>

                <tbody>

                    ${smsServices.map(sms => `

                        <tr>

                            <td>${sms.title}</td>

                            <td>${sms.receiver}</td>

                            <td>${sms.count}</td>

                            <td>
                                <span class="badge">
                                    ${sms.status}
                                </span>
                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


// =====================================================
//                         داشبورد
// =====================================================

function showDashboard() {

    content.innerHTML = createHeader(
        "داشبورد",
        "bi-speedometer2"
    );

    content.innerHTML += `

        <div class="stats">

            <div class="stat-card">
                <i class="bi bi-person-vcard"></i>
                <h3>${students.length}</h3>
                <p>دانش‌آموز</p>
            </div>

            <div class="stat-card">
                <i class="bi bi-mortarboard"></i>
                <h3>${universityStudents.length}</h3>
                <p>دانشجو</p>
            </div>

            <div class="stat-card">
                <i class="bi bi-people"></i>
                <h3>${employees.length}</h3>
                <p>کارمند</p>
            </div>

            <div class="stat-card">
                <i class="bi bi-person-workspace"></i>
                <h3>${teachers.length}</h3>
                <p>معلم</p>
            </div>

        </div>


        <div class="info-card">

            <h3>
                خوش آمدید 👋
            </h3>

            <p>
                از منوی سمت راست می‌توانید بخش‌های مختلف
                پنل مدیریت را مشاهده و مدیریت کنید.
            </p>

        </div>

    `;
}


// =====================================================
//                    صفحات و فرم‌ها
// =====================================================

function showSimpleSection(title, icon, text) {

    content.innerHTML = createHeader(title, icon);

    content.innerHTML += `

        <div class="info-card">

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </div>

    `;
}


// =====================================================
//                    کلیک روی منو
// =====================================================

const menuItems = document.querySelectorAll(".menu-item");


menuItems.forEach(item => {

    item.addEventListener("click", function (event) {

        event.preventDefault();

        menuItems.forEach(menu => {

            menu.classList.remove("active");

        });

        this.classList.add("active");


        const section = this.dataset.section;


        if (section === "dashboard") {

            showDashboard();

        }

        else if (section === "students") {

            showStudents();

        }

        else if (section === "university") {

            showUniversityStudents();

        }

        else if (section === "employees") {

            showEmployees();

        }

        else if (section === "teachers") {

            showTeachers();

        }

        else if (section === "drivers") {

            showDrivers();

        }

        else if (section === "legal") {

            showLegal();

        }

        else if (section === "services") {

            showServices();

        }

        else if (section === "finance") {

            showFinance();

        }

        else if (section === "sms") {

            showSMS();

        }

        else if (section === "pages") {

            showSimpleSection(
                "صفحات",
                "bi-file-earmark-text-fill",
                "مدیریت و ویرایش صفحات سیستم از این قسمت انجام می‌شود."
            );

        }

        else if (section === "forms") {

            showSimpleSection(
                "فرم‌ها",
                "bi-ui-checks-grid",
                "مدیریت فرم‌های مختلف سیستم از این قسمت انجام می‌شود."
            );

        }

    });

});


// =====================================================
//                   اجرای اولیه داشبورد
// =====================================================

showDashboard();