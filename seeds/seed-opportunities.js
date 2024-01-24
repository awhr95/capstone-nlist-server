/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("opportunities").del();
  await knex("opportunities").insert([
    {
      id: 1,
      title: "Save the Children",
      description:
        "Save the Children is a UK charity for children that works in over 100 countries to make sure children are fed, learning and treated fairly. ",
      date_of_opportunity: "2024-01-25",
      start_time_of_opportunity: "14:00:00",
      end_time_of_opportunity: "17:00:00",
      number_of_volunteers_needed: 8,
    },
    {
      id: 2,
      title: "Litter Picking - Littlebury Rd",
      description:
        "Community group litter picking on saturday mornings, come and join! Equipment provided!",
      date_of_opportunity: "2024-01-27",
      start_time_of_opportunity: "09:00:00",
      end_time_of_opportunity: "11:00:00",
      number_of_volunteers_needed: 5,
    },
    {
      id: 3,
      title: "London Food Bank Assistance",
      description:
        "Help distribute food to those in need at the London Food Bank. Volunteers needed to sort and pack food items.",
      date_of_opportunity: "2024-02-01",
      start_time_of_opportunity: "10:30:00",
      end_time_of_opportunity: "13:30:00",
      number_of_volunteers_needed: 10,
    },
    {
      id: 4,
      title: "Greenwich Park Cleanup",
      description:
        "Join us in keeping Greenwich Park clean and green. A community effort to maintain the beauty of our local park.",
      date_of_opportunity: "2024-02-03",
      start_time_of_opportunity: "14:00:00",
      end_time_of_opportunity: "16:00:00",
      number_of_volunteers_needed: 15,
    },
    {
      id: 5,
      title: "Supporting Elderly - Shopping Assistance",
      description:
        "Volunteers needed to assist elderly residents with grocery shopping. Make a positive impact in the lives of seniors.",
      date_of_opportunity: "2024-02-05",
      start_time_of_opportunity: "11:00:00",
      end_time_of_opportunity: "14:00:00",
      number_of_volunteers_needed: 3,
    },
    {
      id: 6,
      title: "Thames River Cleanup",
      description:
        "Join the Thames River Cleanup initiative. Help remove plastic and debris from the riverbanks to protect the environment.",
      date_of_opportunity: "2024-02-08",
      start_time_of_opportunity: "09:30:00",
      end_time_of_opportunity: "12:30:00",
      number_of_volunteers_needed: 20,
    },
    {
      id: 7,
      title: "Local Community Garden Planting",
      description:
        "Contribute to the beauty of your community by joining the community garden planting event. All ages welcome!",
      date_of_opportunity: "2024-02-10",
      start_time_of_opportunity: "13:00:00",
      end_time_of_opportunity: "15:00:00",
      number_of_volunteers_needed: 8,
    },
    {
      id: 8,
      title: "London Marathon Water Station Volunteers",
      description:
        "Be part of the London Marathon support team! Volunteer at a water station and cheer on the runners.",
      date_of_opportunity: "2024-02-12",
      start_time_of_opportunity: "08:00:00",
      end_time_of_opportunity: "14:00:00",
      number_of_volunteers_needed: 30,
    },
    {
      id: 9,
      title: "Hackney Homeless Shelter Assistance",
      description:
        "Help provide warmth and support to the homeless in Hackney. Volunteers needed for evening shelter assistance.",
      date_of_opportunity: "2024-02-15",
      start_time_of_opportunity: "18:00:00",
      end_time_of_opportunity: "21:00:00",
      number_of_volunteers_needed: 12,
    },
    {
      id: 10,
      title: "Community Library Reading Program",
      description:
        "Support literacy in your community by volunteering for the library's reading program. Help children discover the joy of reading.",
      date_of_opportunity: "2024-02-18",
      start_time_of_opportunity: "16:30:00",
      end_time_of_opportunity: "18:30:00",
      number_of_volunteers_needed: 6,
    },
    {
      id: 11,
      title: "City Farm Animal Care",
      description:
        "Spend a day at the city farm caring for animals. Volunteers needed for feeding and cleaning tasks.",
      date_of_opportunity: "2024-02-21",
      start_time_of_opportunity: "11:00:00",
      end_time_of_opportunity: "15:00:00",
      number_of_volunteers_needed: 8,
    },
    {
      id: 12,
      title: "Charity Shop Sorting and Organizing",
      description:
        "Join a local charity shop and help sort and organize donated items. All proceeds support community initiatives.",
      date_of_opportunity: "2024-02-24",
      start_time_of_opportunity: "10:00:00",
      end_time_of_opportunity: "12:00:00",
      number_of_volunteers_needed: 5,
    },
    {
      id: 13,
      title: "Art Workshop for Homeless Youth",
      description:
        "Support a creative workshop for homeless youth in London. Volunteers needed to assist with art projects.",
      date_of_opportunity: "2024-02-27",
      start_time_of_opportunity: "14:30:00",
      end_time_of_opportunity: "17:30:00",
      number_of_volunteers_needed: 10,
    },
    {
      id: 14,
      title: "Cancer Research Charity Run",
      description:
        "Participate in a charity run to raise funds for cancer research. Volunteers needed for event coordination and support.",
      date_of_opportunity: "2024-03-01",
      start_time_of_opportunity: "07:00:00",
      end_time_of_opportunity: "12:00:00",
      number_of_volunteers_needed: 25,
    },
    {
      id: 15,
      title: "Battersea Animal Shelter Adoption Event",
      description:
        "Help find loving homes for animals at the Battersea Animal Shelter. Volunteers needed for adoption event assistance.",
      date_of_opportunity: "2024-03-04",
      start_time_of_opportunity: "12:00:00",
      end_time_of_opportunity: "15:00:00",
      number_of_volunteers_needed: 8,
    },
  ]);
};
