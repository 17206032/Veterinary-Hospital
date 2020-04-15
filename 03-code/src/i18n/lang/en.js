import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    menu : {
        home:"Home",
        customerPetpagePetname: "Pet's name: ",
        register :"Customer Register",
        customerLogin:"Customer Login",
        staffLogin:"Staff Login",
        title:"Appointment System Of The Healing Paws",
        addAppointment:"New Appointment",
        addPet:"Add a pet",
        contactStaff:"Contact Staff",
        staffHome:"Management System Of The Healing Paws",
        urgentAppointment:"Urgent Appointments",
        normalAppointment:"Normal Appointments",
        setOperationTime:"Set Operation Time",
    },
    message:{
        alreadyExist:"Account already exists, please try another one!",
        exit:"Successfully Exit",
        symptom:"Please enter pet symptom",
        symptomLength:"The symptom should between 1 and 100 characters",
        urgency:"Please choose at least one urgency type",
        time:"Please choose a date",
        hospital:"Please choose at least one hospital",
        successed:"Successed",
        failed:"Failed",
        successAppointment:"Created a new appointment successfully!",
        failingAppointment:"Failed to create a new appointment!",
        petName:"Please enter pet name",
        petNameLength:"Pet name should between 1 and 20 characters",
        petGender: "Please choose at least one pet gender",
        petType: "Please enter pet type",
        successAddPet:"Added a new pet successfully!",
        failingAddPet:"Failed to add a pet!",
        successAssign:"Set operation date successfully! ",
        failingAssign:"Failed to set operation date!",

    },
    placeholder:{
        account:"Please enter your account",
        password:"Please enter your password",
        email:"Please enter your email address",
        phone:"Please enter your phone number",
        symptom: "Please enter pet symptom",
        urgency: "Please choose an urgency type",
        time:"Please choose a date",
        hospital:"Please choose a hospital",
        petName:"Please enter pet name",
        petGender: "Please choose pet gender",
        petType: "Please enter pet type",
        searchUser:"Please enter user name",
    },
    button:{
        register:"Register",
        login:"Login",
        goRegister:"Don't have an account, go register first",
        staffEntrance:"Staff Entrance",
        customerEntrance:"Customer Entrance",
        customerHomepagePet: "My Pets",
        customerHomepageAppointment: "My Appointments",
        customerHomepageMessage: "Contact Staff",
        logOut:"Log Out",
        switchLanguage:"Switch Language",
        add:"Add",
        reset:"Reset",
        cancel:"Cancel",
        allAppointments:"All Appointments",
        customerMessages:"Customer messages",
        schedule:"Schedule",
        detail:"More Detail",
        sendMessage:"Send Message",
        assign:"Assign",
    },
    sideMenu:{
        all:"All",
        waitingDistribution:"Waiting For Distribution",
        waitingOperation:"Ready For Operation",
        duringOperation:"During Operation",
        waitingRelease:"Ready For Release",
        noAppointment:"No appointment",
        assigned:"Assigned",
        unassigned:"Unassigned",
    },
    column:{
        English:"English",
        Chinese:"Chinese",
        petNumber:"Pet Number: ",
        petName:"Pet Name: ",
        petGender:"Pet Gender: ",
        petType:"Pet Type: ",
        owner:"Owner: ",
        symptom:"Symptom: ",
        urgency:"Urgency: ",
        time:"Expect Time: ",
        hospital:"Hospital: ",
        pet:"Pet:",
        distribution:"Distribution: ",
        appointmentNumber:"Number: ",
        operation:"Operations: ",
        phone:"Contact Number: ",
        reserveTime:"Reserve Time: ",
        date:"Date: ",
        customer:"Customer: ",
        newMessage:"New Message: ",
    },
    choices:{
        normal:"normal",
        urgent:"urgent",
        Beijing:"Beijing",
        Shanghai:"Shanghai",
        Chengdu:"Chengdu",
        male:"male",
        female:"female",
    },
    ...enLocale
};


export default en;