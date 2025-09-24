<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'يجب قبول حقل :attribute.',
    'accepted_if' => 'يجب قبول حقل :attribute عندما يكون :other هو :value.',
    'active_url' => 'حقل :attribute يجب أن يكون رابطاً صحيحاً.',
    'after' => 'حقل :attribute يجب أن يكون تاريخاً بعد :date.',
    'after_or_equal' => 'حقل :attribute يجب أن يكون تاريخاً بعد أو يساوي :date.',
    'alpha' => 'حقل :attribute يجب أن يحتوي على أحرف فقط.',
    'alpha_dash' => 'حقل :attribute يجب أن يحتوي على أحرف وأرقام وشرطات وشرطات سفلية فقط.',
    'alpha_num' => 'حقل :attribute يجب أن يحتوي على أحرف وأرقام فقط.',
    'any_of' => 'حقل :attribute غير صالح.',
    'array' => 'حقل :attribute يجب أن يكون مصفوفة.',
    'ascii' => 'حقل :attribute يجب أن يحتوي على أحرف وأرقام ورموز أحادية البايت فقط.',
    'before' => 'حقل :attribute يجب أن يكون تاريخاً قبل :date.',
    'before_or_equal' => 'حقل :attribute يجب أن يكون تاريخاً قبل أو يساوي :date.',
    'between' => [
        'array' => 'حقل :attribute يجب أن يحتوي على عدد من العناصر بين :min و :max.',
        'file' => 'حقل :attribute يجب أن يكون بين :min و :max كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون بين :min و :max.',
        'string' => 'حقل :attribute يجب أن يكون بين :min و :max حرفاً.',
    ],
    'boolean' => 'حقل :attribute يجب أن يكون صحيح أو خطأ.',
    'can' => 'حقل :attribute يحتوي على قيمة غير مسموحة.',
    'confirmed' => 'تأكيد حقل :attribute غير متطابق.',
    'contains' => 'حقل :attribute يفتقد قيمة مطلوبة.',
    'current_password' => 'كلمة المرور غير صحيحة.',
    'date' => 'حقل :attribute يجب أن يكون تاريخاً صحيحاً.',
    'date_equals' => 'حقل :attribute يجب أن يكون تاريخاً يساوي :date.',
    'date_format' => 'حقل :attribute يجب أن يتطابق مع الصيغة :format.',
    'decimal' => 'حقل :attribute يجب أن يحتوي على :decimal منزلة عشرية.',
    'declined' => 'حقل :attribute يجب رفضه.',
    'declined_if' => 'حقل :attribute يجب رفضه عندما يكون :other هو :value.',
    'different' => 'حقل :attribute و :other يجب أن يكونا مختلفين.',
    'digits' => 'حقل :attribute يجب أن يكون :digits أرقام.',
    'digits_between' => 'حقل :attribute يجب أن يكون بين :min و :max رقماً.',
    'dimensions' => 'حقل :attribute يحتوي على أبعاد صورة غير صالحة.',
    'distinct' => 'حقل :attribute يحتوي على قيمة مكررة.',
    'doesnt_contain' => 'حقل :attribute يجب ألا يحتوي على أي من: :values.',
    'doesnt_end_with' => 'حقل :attribute يجب ألا ينتهي بأحد التالي: :values.',
    'doesnt_start_with' => 'حقل :attribute يجب ألا يبدأ بأحد التالي: :values.',
    'email' => 'حقل :attribute يجب أن يكون عنوان بريد إلكتروني صحيح.',
    'ends_with' => 'حقل :attribute يجب أن ينتهي بأحد التالي: :values.',
    'enum' => ':attribute المحدد غير صالح.',
    'exists' => ':attribute المحدد غير صالح.',
    'extensions' => 'حقل :attribute يجب أن يحتوي على إحدى الامتدادات التالية: :values.',
    'file' => 'حقل :attribute يجب أن يكون ملفاً.',
    'filled' => 'حقل :attribute يجب أن يحتوي على قيمة.',
    'gt' => [
        'array' => 'حقل :attribute يجب أن يحتوي على أكثر من :value عنصر.',
        'file' => 'حقل :attribute يجب أن يكون أكبر من :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون أكبر من :value.',
        'string' => 'حقل :attribute يجب أن يكون أكثر من :value حرفاً.',
    ],
    'gte' => [
        'array' => 'حقل :attribute يجب أن يحتوي على :value عنصر أو أكثر.',
        'file' => 'حقل :attribute يجب أن يكون أكبر من أو يساوي :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون أكبر من أو يساوي :value.',
        'string' => 'حقل :attribute يجب أن يكون أكبر من أو يساوي :value حرفاً.',
    ],
    'hex_color' => 'حقل :attribute يجب أن يكون لوناً سادس عشري صحيح.',
    'image' => 'حقل :attribute يجب أن يكون صورة.',
    'in' => ':attribute المحدد غير صالح.',
    'in_array' => 'حقل :attribute يجب أن يكون موجوداً في :other.',
    'in_array_keys' => 'حقل :attribute يجب أن يحتوي على مفتاح واحد على الأقل من: :values.',
    'integer' => 'حقل :attribute يجب أن يكون رقماً صحيحاً.',
    'ip' => 'حقل :attribute يجب أن يكون عنوان IP صحيح.',
    'ipv4' => 'حقل :attribute يجب أن يكون عنوان IPv4 صحيح.',
    'ipv6' => 'حقل :attribute يجب أن يكون عنوان IPv6 صحيح.',
    'json' => 'حقل :attribute يجب أن يكون نص JSON صحيح.',
    'list' => 'حقل :attribute يجب أن يكون قائمة.',
    'lowercase' => 'حقل :attribute يجب أن يكون بأحرف صغيرة.',
    'lt' => [
        'array' => 'حقل :attribute يجب أن يحتوي على أقل من :value عنصر.',
        'file' => 'حقل :attribute يجب أن يكون أقل من :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون أقل من :value.',
        'string' => 'حقل :attribute يجب أن يكون أقل من :value حرفاً.',
    ],
    'lte' => [
        'array' => 'حقل :attribute يجب ألا يحتوي على أكثر من :value عنصر.',
        'file' => 'حقل :attribute يجب أن يكون أقل من أو يساوي :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون أقل من أو يساوي :value.',
        'string' => 'حقل :attribute يجب أن يكون أقل من أو يساوي :value حرفاً.',
    ],
    'mac_address' => 'حقل :attribute يجب أن يكون عنوان MAC صحيح.',
    'max' => [
        'array' => 'حقل :attribute يجب ألا يحتوي على أكثر من :max عنصر.',
        'file' => 'حقل :attribute يجب ألا يكون أكبر من :max كيلوبايت.',
        'numeric' => 'حقل :attribute يجب ألا يكون أكبر من :max.',
        'string' => 'حقل :attribute يجب ألا يكون أكثر من :max حرفاً.',
    ],
    'max_digits' => 'حقل :attribute يجب ألا يحتوي على أكثر من :max رقم.',
    'mimes' => 'حقل :attribute يجب أن يكون ملف من نوع: :values.',
    'mimetypes' => 'حقل :attribute يجب أن يكون ملف من نوع: :values.',
    'min' => [
        'array' => 'حقل :attribute يجب أن يحتوي على :min عنصر على الأقل.',
        'file' => 'حقل :attribute يجب أن يكون :min كيلوبايت على الأقل.',
        'numeric' => 'حقل :attribute يجب أن يكون :min على الأقل.',
        'string' => 'حقل :attribute يجب أن يكون :min حرفاً على الأقل.',
    ],
    'min_digits' => 'حقل :attribute يجب أن يحتوي على :min رقم على الأقل.',
    'missing' => 'حقل :attribute يجب أن يكون مفقوداً.',
    'missing_if' => 'حقل :attribute يجب أن يكون مفقوداً عندما يكون :other هو :value.',
    'missing_unless' => 'حقل :attribute يجب أن يكون مفقوداً إلا إذا كان :other هو :value.',
    'missing_with' => 'حقل :attribute يجب أن يكون مفقوداً عندما يكون :values موجود.',
    'missing_with_all' => 'حقل :attribute يجب أن يكون مفقوداً عندما تكون :values موجودة.',
    'multiple_of' => 'حقل :attribute يجب أن يكون مضاعف :value.',
    'not_in' => ':attribute المحدد غير صالح.',
    'not_regex' => 'صيغة حقل :attribute غير صالحة.',
    'numeric' => 'حقل :attribute يجب أن يكون رقماً.',
    'password' => [
        'letters' => 'حقل :attribute يجب أن يحتوي على حرف واحد على الأقل.',
        'mixed' => 'حقل :attribute يجب أن يحتوي على حرف كبير وحرف صغير على الأقل.',
        'numbers' => 'حقل :attribute يجب أن يحتوي على رقم واحد على الأقل.',
        'symbols' => 'حقل :attribute يجب أن يحتوي على رمز واحد على الأقل.',
        'uncompromised' => ':attribute المعطى ظهر في تسريب بيانات. يرجى اختيار :attribute مختلف.',
    ],
    'present' => 'حقل :attribute يجب أن يكون موجوداً.',
    'present_if' => 'حقل :attribute يجب أن يكون موجوداً عندما يكون :other هو :value.',
    'present_unless' => 'حقل :attribute يجب أن يكون موجوداً إلا إذا كان :other هو :value.',
    'present_with' => 'حقل :attribute يجب أن يكون موجوداً عندما يكون :values موجود.',
    'present_with_all' => 'حقل :attribute يجب أن يكون موجوداً عندما تكون :values موجودة.',
    'prohibited' => 'حقل :attribute محظور.',
    'prohibited_if' => 'حقل :attribute محظور عندما يكون :other هو :value.',
    'prohibited_if_accepted' => 'حقل :attribute محظور عندما يكون :other مقبول.',
    'prohibited_if_declined' => 'حقل :attribute محظور عندما يكون :other مرفوض.',
    'prohibited_unless' => 'حقل :attribute محظور إلا إذا كان :other في :values.',
    'prohibits' => 'حقل :attribute يمنع :other من الوجود.',
    'regex' => 'صيغة حقل :attribute غير صالحة.',
    'required' => 'حقل :attribute مطلوب.',
    'required_array_keys' => 'حقل :attribute يجب أن يحتوي على مدخلات لـ: :values.',
    'required_if' => 'حقل :attribute مطلوب عندما يكون :other هو :value.',
    'required_if_accepted' => 'حقل :attribute مطلوب عندما يكون :other مقبول.',
    'required_if_declined' => 'حقل :attribute مطلوب عندما يكون :other مرفوض.',
    'required_unless' => 'حقل :attribute مطلوب إلا إذا كان :other في :values.',
    'required_with' => 'حقل :attribute مطلوب عندما يكون :values موجود.',
    'required_with_all' => 'حقل :attribute مطلوب عندما تكون :values موجودة.',
    'required_without' => 'حقل :attribute مطلوب عندما لا يكون :values موجود.',
    'required_without_all' => 'حقل :attribute مطلوب عندما لا يكون أي من :values موجوداً.',
    'same' => 'حقل :attribute يجب أن يطابق :other.',
    'size' => [
        'array' => 'حقل :attribute يجب أن يحتوي على :size عنصر.',
        'file' => 'حقل :attribute يجب أن يكون :size كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون :size.',
        'string' => 'حقل :attribute يجب أن يكون :size حرفاً.',
    ],
    'starts_with' => 'حقل :attribute يجب أن يبدأ بأحد التالي: :values.',
    'string' => 'حقل :attribute يجب أن يكون نص.',
    'timezone' => 'حقل :attribute يجب أن يكون منطقة زمنية صحيحة.',
    'unique' => ':attribute مُستخدم من قبل.',
    'uploaded' => 'فشل في رفع :attribute.',
    'uppercase' => 'حقل :attribute يجب أن يكون بأحرف كبيرة.',
    'url' => 'حقل :attribute يجب أن يكون رابط صحيح.',
    'ulid' => 'حقل :attribute يجب أن يكون ULID صحيح.',
    'uuid' => 'حقل :attribute يجب أن يكون UUID صحيح.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'رسالة مخصصة',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'name' => 'الاسم',
        'username' => 'اسم المستخدم',
        'email' => 'البريد الإلكتروني',
        'password' => 'كلمة المرور',
        'password_confirmation' => 'تأكيد كلمة المرور',
        'city' => 'المدينة',
        'country' => 'البلد',
        'address' => 'العنوان',
        'phone' => 'الهاتف',
        'mobile' => 'الجوال',
        'age' => 'العمر',
        'sex' => 'الجنس',
        'gender' => 'النوع',
        'day' => 'اليوم',
        'month' => 'الشهر',
        'year' => 'السنة',
        'hour' => 'الساعة',
        'minute' => 'الدقيقة',
        'second' => 'الثانية',
        'title' => 'العنوان',
        'content' => 'المحتوى',
        'description' => 'الوصف',
        'excerpt' => 'المقتطف',
        'date' => 'التاريخ',
        'time' => 'الوقت',
        'available' => 'متاح',
        'size' => 'الحجم',
        'file' => 'الملف',
        'image' => 'الصورة',
        'photo' => 'الصورة',
        'avatar' => 'الصورة الشخصية',
        'status' => 'الحالة',
        'message' => 'الرسالة',
        'slug' => 'الرابط',
        'created_at' => 'تاريخ الإنشاء',
        'updated_at' => 'تاريخ التحديث',
        'first_name' => 'الاسم الأول',
        'last_name' => 'الاسم الأخير',
    ],

];