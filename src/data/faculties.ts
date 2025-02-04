export interface Faculty {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  programs: string[];
}

export const faculties: Faculty[] = [
  {
    id: 'cse',
    name: 'Computer Science and Engineering',
    shortName: 'CSE',
    description: 'Leading education in computing, software engineering, and digital innovation.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['B.Sc. in CSE', 'M.Sc. in CSE', 'Ph.D. in CSE']
  },
  {
    id: 'ict',
    name: 'Information and Communication Technology',
    shortName: 'ICT',
    description: 'Advanced studies in ICT, networking, and digital communications.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['B.Sc. in ICT', 'M.Sc. in ICT']
  },
  {
    id: 'english',
    name: 'English',
    shortName: 'ENG',
    description: 'Comprehensive studies in English literature, linguistics, and communication.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['BA in English', 'MA in English', 'Ph.D. in English']
  },
  {
    id: 'bangla',
    name: 'Bangla',
    shortName: 'BNG',
    description: 'Rich exploration of Bengali language, literature, and cultural studies.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['BA in Bangla', 'MA in Bangla', 'Ph.D. in Bangla']
  },
  {
    id: 'microbiology',
    name: 'Microbiology',
    shortName: 'MBio',
    description: 'Cutting-edge research and education in microbiology and biotechnology.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['B.Sc. in Microbiology', 'M.Sc. in Microbiology']
  },
  {
    id: 'bba',
    name: 'Business Administration',
    shortName: 'BBA',
    description: 'Comprehensive business education focusing on modern management practices.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['BBA', 'MBA', 'Ph.D. in Business Administration']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    shortName: 'AGR',
    description: 'Sustainable agricultural practices and modern farming technologies.',
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['B.Sc. in Agriculture', 'M.Sc. in Agriculture']
  },
  {
    id: 'fine-arts',
    name: 'Fine Arts',
    shortName: 'FA',
    description: 'Creative exploration in visual arts, design, and artistic expression.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['BFA', 'MFA']
  },
  {
    id: 'music',
    name: 'Music',
    shortName: 'MUS',
    description: 'Comprehensive music education combining theory and performance.',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['BA in Music', 'MA in Music']
  },
  {
    id: 'physical-education',
    name: 'Physical Education and Sports Science',
    shortName: 'PESS',
    description: 'Advanced studies in sports science, physical education, and athletics.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    programs: ['B.Sc. in Physical Education', 'M.Sc. in Sports Science']
  }
];

export const upcomingFaculties = [
  {
    id: 'civil',
    name: 'Civil Engineering',
    description: 'Opening Soon: Comprehensive education in structural engineering and construction.',
    expectedDate: 'Fall 2024'
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'Coming Soon: Advanced studies in mechanical systems and manufacturing.',
    expectedDate: 'Spring 2025'
  }
];