import React from 'react'

export const InputField = ({ idParent, indexParent, editingField, placeholder, className, type, name, value, onChange }) => (

    <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(event) => onChange(idParent, indexParent, editingField, event)}
        className={className}
        autoComplete="off"
        autoFocus={true}
    />

);


