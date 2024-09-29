<template>
  <div>
    <div class="container">
      <h1 class=" text-4xl font-extrabold text-red-700 mb-6">Chemotherapy Re-constitution Request Form</h1>
      <hr class="h-[2px] bg-black my-4" />

      <!-- Form Fields for User Input -->
      <form @submit.prevent="generatePdf">
        <div class="grid grid-cols-5 gap-4">
          <div class="form-group grid col-span-3">
            <label class="justify-self-start">Patient Name:</label>
            <input type="text" v-model="formData.patientName" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Age:</label>
            <input type="number" v-model="formData.age" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">BSA (m²):</label>
            <input type="text" v-model="formData.bsa" />
          </div>
        </div>

        <div class="grid grid-cols-5 gap-4">
          <div class="form-group grid col-span-3">
            <label class="justify-self-start">Name of specialist:</label>
            <input type="text" v-model="formData.NameofSpecialist" />
          </div>
          <div class="form-group grid col-span-2">
            <label class="justify-self-start">date:</label>
            <input type="date" v-model="formData.date" />
          </div>
        </div>

        <div class="grid grid-cols-5 gap-4">
          <div class="form-group grid col-span-2">
            <label class="justify-self-start">diagnosis:</label>
            <input type="text" v-model="formData.diagnosis" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Protocol name:</label>
            <input type="text" v-model="formData.Protocol" />
          </div>
          <div class="form-group grid col-span-2">
            <label class="justify-self-start">Number of dose:</label>
            <input type="text" v-model="formData.NumberofDose" />
          </div>
        </div>

        <div class="grid grid-cols-5 gap-4">
          <div class="form-group grid col-span-2">
            <label class="justify-self-start">Case sheet number:</label>
            <input type="text" v-model="formData.caseSheetNumber" />
          </div>
          <div class="form-group grid col-span-2">
            <label class="justify-self-start">Room number:</label>
            <input type="text" v-model="formData.RoomNumber" />
          </div>
          <div class="form-group grid grid-cols-2 grid-rows-2 content-start">
            <label class="col-span-2 row-span-2 mb-2">Gender:</label>
            <div class="flex items-center space-x-3">
              <input
                type="radio"
                id="male"
                value="Male"
                v-model="formData.Gender"
                class="custom-radio"
              />
              <label for="male" class="text-gray-700 font-medium">Male</label>
            </div>

            <div class="flex items-center space-x-3">
              <input
                type="radio"
                id="female"
                value="Female"
                v-model="formData.Gender"
                class="custom-radio"
              />
              <label for="female" class="text-gray-700 font-medium"
                >Female</label
              >
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="form-group grid">
            <label class="justify-self-start"
              >This protocol repeated every:</label
            >
            <input type="number" v-model="formData.protocolRepeated" />
          </div>
        </div>

        <hr class="h-[2px] bg-black my-4" />

        <div class="grid grid-cols-4 grid-rows-2 gap-4">
          <div class="form-group grid">
            <label class="justify-self-start">No:</label>
            <input type="text" v-model="DrugData.No" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Drug:</label>
            <input type="text" v-model="DrugData.drugName" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Dose:</label>
            <input type="text" v-model="DrugData.dose" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Diluted in:</label>
            <input type="text" v-model="DrugData.dilutedIn" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Route of administrtion:</label>
            <input type="text" v-model="DrugData.routeOfAdministration" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start"
              >Time to start administrtion:</label
            >
            <input type="text" v-model="DrugData.timeToStart" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Duration of administrtion:</label>
            <input type="text" v-model="DrugData.duration" />
          </div>
          <div class="form-group grid">
            <label class="justify-self-start">Note:</label>
            <input type="text" v-model="DrugData.note" />
          </div>
        </div>

        <button type="button" class="my-4 buttonCorrect" @click="addRow">Add New Row</button>

        <div>
          <table class="border-2 border-black border-collapse w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Drug</th>
                <th>Dose</th>
                <th>Diluted in</th>
                <th>Route of administration</th>
                <th>Time to start administration</th>
                <th>Duration of administration</th>
                <th>Note</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug, index) in DrugTable" :key="index">
                <td>{{ drug.No }}</td>
                <td>{{ drug.drugName }}</td>
                <td>{{ drug.dose }}</td>
                <td>{{ drug.dilutedIn }}</td>
                <td>{{ drug.routeOfAdministration }}</td>
                <td>{{ drug.timeToStart }}</td>
                <td>{{ drug.duration }}</td>
                <td>{{ drug.note }}</td>
                <td>
                  <button type="button"
                    @click="editRow(index)"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button"
                    @click="deleteRow(index)"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="h-[2px] bg-black my-20 " />

        <h1 class="font-extrabold text-4xl  mb-8">Review pdf</h1>

        <div class="bg-white p-4">
          <div class="grid grid-cols-2 grid-rows-2 content-start">
            <h1 class="font-extrabold text-2xl underline justify-self-start">
              Diagnosis {{ formData.diagnosis }}
            </h1>
            <h1 class="font-extrabold text-2xl underline justify-self-start">
              Protocol {{ formData.Protocol }}
            </h1>
          </div>
          <div class="grid grid-rows-2 content-start">
            <h1 class="font-extrabold text-2xl underline justify-self-start">
              This protocol repeated every {{ formData.protocolRepeated }} day
            </h1>
          </div>
          <div class="grid grid-rows-2 content-start">
            <h1 class="font-extrabold text-2xl underline justify-self-center">
              chemotherapy Re-constitution Request Form
            </h1>
          </div>

          <table
            class="border border-black border-collapse w-[750px] mx-auto table-fixed"
          >
            <thead>
              <tr>
                <th colspan="5">
                  Patient name: <span>{{ formData.patientName }}</span>
                </th>
                <th colspan="4">
                  Age: <span>{{ formData.age }}</span> years
                </th>
                <th colspan="4">
                  <span>BSA:</span>
                  <span>{{ formData.bsa }} m<sup>2</sup></span>
                </th>
              </tr>
              <tr>
                <th colspan="8">
                  Name of specialist:
                  <span>{{ formData.NameofSpecialist }}</span>
                </th>
                <th colspan="5">
                  Date: <span>{{ formData.date }}</span>
                </th>
              </tr>
              <tr>
                <th colspan="6">
                  Diagnosis: <span>{{ formData.diagnosis }}</span>
                </th>
                <th colspan="3">
                  Protocol name: <span>{{ formData.Protocol }}</span>
                </th>
                <th colspan="4">
                  Number of dose: <span>{{ formData.NumberofDose }}</span>
                </th>
              </tr>
              <tr>
                <th colspan="6">
                  Case sheet number: <span>{{ formData.caseSheetNumber }}</span>
                </th>
                <th colspan="5">
                  Room number: <span>{{ formData.RoomNumber }}</span>
                </th>
                <th colspan="2">
                  Gender: <span>{{ formData.Gender }}</span>
                </th>
              </tr>
              <tr>
                <th>No</th>
                <th colspan="2">Drug</th>
                <th>Dose</th>
                <th>Diluted in</th>
                <th colspan="2">Route of administration</th>
                <th colspan="2">Time to start administration</th>
                <th colspan="2">Duration of administration</th>
                <th colspan="2">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug, index) in DrugTable" :key="index">
                <td>{{ drug.No }}</td>
                <td colspan="2">{{ drug.drugName }}</td>
                <td>{{ drug.dose }}</td>
                <td>{{ drug.dilutedIn }}</td>
                <td colspan="2">{{ drug.routeOfAdministration }}</td>
                <td colspan="2">{{ drug.timeToStart }}</td>
                <td colspan="2">{{ drug.duration }}</td>
                <td colspan="2">{{ drug.note }}</td>
              </tr>
            </tbody>
          </table>
          <div class="grid w-[90%] my-8 gap-4 mx-auto">
            <h1 class="font-extrabold text-base text-left justify-self-start">
              ✔ This should be signed first by the hematologist, then the
              pharmacist, then the Re-constituter, and finally by the nurse.
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-start">
              ✔ The nurse should compare this paper to what had been written in
              the case sheet, which should be 100% compatible.
            </h1>

            <h1 class="font-extrabold text-base text-left justify-self-start">
              ✔ The premedication is not included, so the nurse should check the
              case sheet.
            </h1>
          </div>

          <div class="grid grid-cols-4 grid-rows-2 content-start pb-6">
            <h1 class="font-extrabold text-base text-left justify-self-center">
              hematologist sign
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-center">
              Pharmacist sign
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-center">
              Re-constituter sign
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-center">
              Nurse sign
            </h1>
          </div>
        </div>
        <button class="mt-4 buttonCorrect" type="submit">Generate PDF</button>
      </form>
    </div>

    <!-- Vue-html2pdf Component -->
    <vue-html2pdf
      ref="pdfRef"
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      :filename="`${formData.patientName}_chemotherapy_request_form.pdf`"
      pdf-quality="2"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      manual-pagination
    >
      <section slot="pdf-content" class="p-5">
        <div class="bg-white">
          <div class="grid grid-cols-2 grid-rows-2 content-start">
            <h1 class="font-extrabold text-2xl underline justify-self-start">
              Diagnosis {{ formData.diagnosis }}
            </h1>
            <h1 class="font-extrabold text-2xl underline justify-self-start">
              Protocol {{ formData.Protocol }}
            </h1>
          </div>
          <div class="grid grid-rows-2 content-start">
            <h1 class="font-extrabold text-2xl underline justify-self-start">
              This protocol repeated every {{ formData.protocolRepeated }} day
            </h1>
          </div>
          <div class="grid grid-rows-2 content-start">
            <h1 class="font-extrabold text-2xl underline justify-self-center">
              chemotherapy Re-constitution Request Form
            </h1>
          </div>

          <table
            class="border border-black border-collapse w-[750px] mx-auto table-fixed"
          >
            <thead>
              <tr>
                <th colspan="5">
                  Patient name: <span>{{ formData.patientName }}</span>
                </th>
                <th colspan="4">
                  Age: <span>{{ formData.age }}</span> years
                </th>
                <th colspan="4">
                  <span>BSA:</span>
                  <span>{{ formData.bsa }} m<sup>2</sup></span>
                </th>
              </tr>
              <tr>
                <th colspan="8">
                  Name of specialist:
                  <span>{{ formData.NameofSpecialist }}</span>
                </th>
                <th colspan="5">
                  Date: <span>{{ formData.date }}</span>
                </th>
              </tr>
              <tr>
                <th colspan="6">
                  Diagnosis: <span>{{ formData.diagnosis }}</span>
                </th>
                <th colspan="3">
                  Protocol name: <span>{{ formData.Protocol }}</span>
                </th>
                <th colspan="4">
                  Number of dose: <span>{{ formData.NumberofDose }}</span>
                </th>
              </tr>
              <tr>
                <th colspan="6">
                  Case sheet number: <span>{{ formData.caseSheetNumber }}</span>
                </th>
                <th colspan="5">
                  Room number: <span>{{ formData.RoomNumber }}</span>
                </th>
                <th colspan="2">
                  Gender: <span>{{ formData.Gender }}</span>
                </th>
              </tr>
              <tr>
                <th>No</th>
                <th colspan="2">Drug</th>
                <th>Dose</th>
                <th>Diluted in</th>
                <th colspan="2">Route of administration</th>
                <th colspan="2">Time to start administration</th>
                <th colspan="2">Duration of administration</th>
                <th colspan="2">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug, index) in DrugTable" :key="index">
                <td>{{ drug.No }}</td>
                <td colspan="2">{{ drug.drugName }}</td>
                <td>{{ drug.dose }}</td>
                <td>{{ drug.dilutedIn }}</td>
                <td colspan="2">{{ drug.routeOfAdministration }}</td>
                <td colspan="2">{{ drug.timeToStart }}</td>
                <td colspan="2">{{ drug.duration }}</td>
                <td colspan="2">{{ drug.note }}</td>
              </tr>
            </tbody>
          </table>
          <div class="grid w-[90%] my-8 gap-4 mx-auto">
            <h1 class="font-extrabold text-base text-left justify-self-start">
              ✔ This should be signed first by the hematologist, then the
              pharmacist, then the Re-constituter, and finally by the nurse.
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-start">
              ✔ The nurse should compare this paper to what had been written in
              the case sheet, which should be 100% compatible.
            </h1>

            <h1 class="font-extrabold text-base text-left justify-self-start">
              ✔ The premedication is not included, so the nurse should check the
              case sheet.
            </h1>
          </div>

          <div class="grid grid-cols-4 grid-rows-2 content-start pb-6">
            <h1 class="font-extrabold text-base text-left justify-self-center">
              hematologist sign
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-center">
              Pharmacist sign
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-center">
              Re-constituter sign
            </h1>
            <h1 class="font-extrabold text-base text-left justify-self-center">
              Nurse sign
            </h1>
          </div>
        </div>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import vueHtml2pdf from "vue-html2pdf";

export default {
  name: "FormPdf",
  components: {
    vueHtml2pdf,
  },
  data() {
    return {
      formData: {
        patientName: "",
        age: "",
        bsa: "",
        NameofSpecialist: "",
        date: "",
        diagnosis: "",
        Protocol: "",
        NumberofDose: "",
        caseSheetNumber: "",
        RoomNumber: "",
        Gender: "",
        protocolRepeated: "",
      },
      DrugData: {
        No: "",
        drugName: "",
        dose: "",
        dilutedIn: "",
        routeOfAdministration: "",
        timeToStart: "",
        duration: "",
        note: "",
      },
      DrugTable: [],
    };
  },
  methods: {
    generatePdf() {
      console.log(this.formData);
      this.$refs.pdfRef.generatePdf();
    },
    addRow() {
      this.DrugTable.push({ ...this.DrugData });
      this.DrugData = {
        No: "",
        drugName: "",
        dose: "",
        dilutedIn: "",
        routeOfAdministration: "",
        timeToStart: "",
        duration: "",
        note: "",
      };
    },
    deleteRow(index) {
      this.DrugTable.splice(index, 1);
    },
    editRow(index) {
      this.DrugData = { ...this.DrugTable[index] };
      this.DrugTable.splice(index, 1);
    },
    clearForm() {
      this.formData = {
        patientName: "",
        age: "",
        bsa: "",
        NameofSpecialist: "",
        date: "",
        diagnosis: "",
        Protocol: "",
        NumberofDose: "",
        caseSheetNumber: "",
        RoomNumber: "",
        Gender: "",
      };
      this.DrugTable = [];
    },
  },
  mounted() {
    // Add any initialization logic here
    this.formData = {
      patientName: "John Doe",
      age: 45,
      bsa: "1.75",
      NameofSpecialist: "Dr. Sarah Johnson",
      date: "2024-09-29",
      diagnosis: "Non-Hodgkin Lymphoma",
      Protocol: "CHOP",
      NumberofDose: "2 of 6",
      caseSheetNumber: "CS-24567",
      RoomNumber: "15B",
      Gender: "Male",
      protocolRepeated: "15",
    };
    this.DrugTable = [
      {
        No: "D1",
        drugName: "Cyclophosphamide",
        dose: "750 mg/m²",
        dilutedIn: "250 ml",
        routeOfAdministration: "IV Infusion",
        timeToStart: "10:00 AM",
        duration: "1 hour",
        note: "Pre-hydration recommended",
      },
      {
        No: "D2",
        drugName: "Doxorubicin",
        dose: "50 mg/m²",
        dilutedIn: "100 ml",
        routeOfAdministration: "IV Push",
        timeToStart: "12:00 PM",
        duration: "30 minutes",
        note: "Monitor for extravasation",
      },
      {
        No: "D3",
        drugName: "Vincristine",
        dose: "1.4 mg/m²",
        dilutedIn: "50 ml",
        routeOfAdministration: "IV Infusion",
        timeToStart: "1:00 PM",
        duration: "15 minutes",
        note: "Max dose 2 mg",
      },
      {
        No: "D4",
        drugName: "Prednisone",
        dose: "100 mg",
        dilutedIn: "-",
        routeOfAdministration: "Oral",
        timeToStart: "9:00 AM",
        duration: "5 days",
        note: "Take with food",
      },
    ];
  },
  computed: {
    // Add any computed properties here
  },
  watch: {
    // Add any watch properties here
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  background: #f7f5f5;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

td,
th {
  border: 1px solid black;
  padding: 4px;
  text-align: left;
  font-size: 14px;
  overflow-wrap: break-word;
  /* word-wrap: break-word; */
}

.custom-radio {
  width: 20px; /* Width of the radio button */
  height: 20px; /* Height of the radio button */
  accent-color: #3b82f6; /* Color when the radio button is selected (available in modern browsers) */
  margin-right: 10px; /* Spacing between the radio button and label */
  cursor: pointer; /* Cursor changes to pointer to indicate it is clickable */
  transition: all 0.2s ease-in-out;
}

h1,
h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight:bolder;
  color: #a30000;
  font-size: 18px;
}

input[type="text"],
input[type="number"] {
  /* width: 100%; */
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttonCorrect {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
}

.buttonCorrect:hover {
  background-color: #45a049;
}


</style>
