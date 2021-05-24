export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type ProfileType = {
  userId?: number
  aboutMe?: string
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  fullName?: string
  photos?: Array<{small: string | null, large: string | null}> 
  contacts?: {
      github: string
      vk: string
      facebook: string
      instagram: string
      twitter: string
      website: string
      youtube: string
      mainLink: string
  }
}