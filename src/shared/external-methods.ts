import {Ref} from "@vue/reactivity";
import {now} from "@/shared/date";
import {User, Users} from "@/shared/interface";

export const printFullName = (name: Ref<string>, surname: Ref<string>) => {
    return (): string => {
        return name.value + ' ' + surname.value;
    }
};

export const changeTime = (time: Ref<string>) => {
    time.value = now();
};

export const addUser = (name: Ref<string>, surname: Ref<string>, usersCollection: Users) => {
    return () => {
        if (name.value === '' || surname.value === '') { return; }
        usersCollection.users = [...usersCollection.users, {
            name: name.value,
            surname: surname.value
        }];
        name.value = '';
        surname.value = '';
    }
};
