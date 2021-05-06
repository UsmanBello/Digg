
export const interestsOptions=['Outdoors', 'Fitness', 'Health', 'Travel', 'Theme parks', 'Cooking', 'Sports',
  'Adventure', 'Music', 'Fashion', 'Technology', 'Architecture', 'Writting', 'Gaming',
  'Dining', 'History', 'Theatre', 'Networking', 'Art', 'Politics', 'Fishing', 'Meet people',
  'Podcast', 'Gambling', 'Self improvement', 'Foreign languages', 'Movies', 'Celebrities', 'Dating',
 'Social media', 'Photography']

  

export const reasonsOptions=['Lifestyle', 'Work opportunities', 'Education','Finance', 'Tourism', 'Family', 
                'Business', 'Security', 'The Weather', 'Meeting new people', 'Culture']
 

export const specialtiesOptions=['Construction', 'Hospitality', 'Real estate', 'Tourism', 'Manufacturing', 'Technology',
                      'Media', 'Farming', 'Fishing', 'Education', 'public service', 'Administration',
                      'Financial services', 'Legal', 'Health care', 'Government', 'Medical', 'Security',
                      'Logistics', 'Robotics', 'Fashion', 'Automotive', 'Transportation', 'Customer support']

export const savingsOptions=['No savings', '0 to 1000 aed', '1000 to 5000 aed', '5000 to 10000 aed',
                  '10,000 to 20,000 aed', '20,000 to 50,000 aed', '+50,000 aed']

export const educationOptions=['High school or less', 'College', 'Dimploma', 'Bachelors']

export const  timeToArrivalOptions=['Right now', '0 to 3 months', '3 to 6 months', '6 - 12 months', 'After 1 year', 'I\'m not sure' ]

export const getInitialInterests=()=>{
    const obj= {}
    for (const key of interestsOptions) {
        obj[key] = false;
    }
   return obj
   }