class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :replies, dependent: :destroy
    has_many :xp_joiners, dependent: :destroy
    has_many :snacks_posts, dependent: :destroy

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }
    # validate :password_lower_case
    # validate :password_uppercase
    # validate :password_special_char
    # validate :password_contains_number

    # def password_uppercase
    #     return if !!password.match(/\p{Upper}/)
    #     errors.add :password, ' must contain at least 1 uppercase '
    # end
    
    # def password_lower_case
    #     return if !!password.match(/\p{Lower}/)
    #     errors.add :password, ' must contain at least 1 lowercase '
    # end
    
    # def password_special_char
    #     special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    #     regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    #     return if password =~ regex
    #     errors.add :password, ' must contain special character'
    # end
    
    # def password_contains_number
    #     return if password.count("0-9") > 0
    #     errors.add :password, ' must contain at least one number'
    # end
    

end
