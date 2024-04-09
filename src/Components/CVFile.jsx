import { GeneralInformation } from './GeneralInformation.jsx'
import { Experiences } from './Experiences.jsx'
import { Formations } from './Formations.jsx'
import { faker } from '@faker-js/faker'

const EDUCATIONNAL_TYPES_ARRAY = ['School', 'University', 'Academy', 'College', 'Learning Center']

export function CVFile() {
  const randomfirstName = faker.person.firstName()
  const randomLastName = faker.person.lastName()
  const randomJobTitle = faker.person.jobTitle()
  const randomEmail = faker.internet.email({ firstName: randomfirstName, lastName: randomLastName })
  const randomPhone = faker.phone.number()
  const randomCity = faker.location.city()

  const experiences = [
    {
      id: 1,
      ville: faker.location.city(),
      dateDebut: faker.date.recent().toJSON().split('T')[0],
      dateFin: faker.date.recent({ days: 200 }).toJSON().split('T')[0],
      entreprise: faker.company.name(),
      nomDuMetier: faker.person.jobTitle(),
      description: faker.lorem.sentence(),
    },
    {
      id: 2,
      ville: faker.location.city(),
      dateDebut: faker.date.recent({ days: 500 }).toJSON().split('T')[0],
      dateFin: faker.date.recent({ days: 900 }).toJSON().split('T')[0],
      entreprise: faker.company.name(),
      nomDuMetier: faker.person.jobTitle(),
      description: faker.lorem.sentence(),
    },
  ]

  const formations = [
    {
      id: 1,
      nomDuDiplome: faker.person.jobTitle(),
      etablissement: `${faker.helpers.arrayElement(EDUCATIONNAL_TYPES_ARRAY)}`,
      dateObtention: faker.date.recent({ days: 1000 }).getFullYear(),
      villeObtention: faker.location.city(),
    },
    {
      id: 2,
      nomDuDiplome: faker.person.jobTitle(),
      etablissement: `${faker.helpers.arrayElement(EDUCATIONNAL_TYPES_ARRAY)}`,
      dateObtention: faker.date.recent({ days: 2000 }).getFullYear(),
      villeObtention: faker.location.city(),
    },
  ]
  return (
    <>
      <div className={'bg-amber-100 w-[21cm] h-[29.7cm] mx-auto border-black border-4 flex flex-col gap-2 p-2'}>
        <GeneralInformation
          initialName={randomfirstName}
          initialsurName={randomLastName}
          initialcvTitle={randomJobTitle}
          initiallocation={randomCity}
          initialtelephone={randomPhone}
          initialemail={randomEmail}
        />
        <Experiences initialExperiences={experiences} />
        <Formations initialFormations={formations} />
      </div>
    </>
  )
}
